package de.tuberlin.tubit.gitlab.aalss18;

import de.iolite.api.IOLITEAPINotResolvableException;
import de.iolite.api.IOLITEAPIProvider;
import de.iolite.api.IOLITEPermissionDeniedException;
import de.iolite.app.AbstractIOLITEApp;
import de.iolite.app.api.environment.EnvironmentAPI;
import de.iolite.app.api.environment.Location;
import de.iolite.app.api.frontend.FrontendAPI;
import de.iolite.app.api.frontend.FrontendAPIException;
import de.iolite.app.api.frontend.util.FrontendAPIRequestHandler;
import de.iolite.app.api.frontend.util.FrontendAPIUtility;
import de.iolite.app.api.storage.StorageAPI;
import de.iolite.app.api.storage.StorageAPIException;
import de.iolite.app.api.user.access.UserAPI;
import de.iolite.common.lifecycle.exception.CleanUpFailedException;
import de.iolite.common.lifecycle.exception.InitializeFailedException;
import de.iolite.common.lifecycle.exception.StartFailedException;
import de.iolite.common.lifecycle.exception.StopFailedException;
import de.iolite.common.requesthandler.*;
import de.iolite.utilities.disposeable.Disposeable;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

import javax.annotation.Nonnull;
import java.io.IOException;
import java.net.URI;
import java.text.MessageFormat;
import java.util.Map;

public class App extends AbstractIOLITEApp {

    @Nonnull
    private static final Logger LOGGER = LoggerFactory.getLogger(App.class);

    /* App APIs */
    private UserAPI userAPI;
    private StorageAPI storageAPI;
    private FrontendAPI frontendAPI;
    private EnvironmentAPI environmentAPI;

    /**
     * front end assets
     */
    private Disposeable disposeableAssets;

    public App() {

    }

    @Override
    protected final void startHook(@Nonnull final IOLITEAPIProvider context) throws StartFailedException {
        LOGGER.debug("Starting");

        try {
            // use User API
            this.userAPI = context.getAPI(UserAPI.class);
            LOGGER.debug("Running for user '{}' with locale '{}'", this.userAPI.getUser().getIdentifier(), this.userAPI.getUser().getLocale());

            // Storage API enables the App to store data persistently
            // whatever is stored via the storage API will also be available if the App is restarted
            this.storageAPI = context.getAPI(StorageAPI.class);
            initializeStorage();

            // Frontend API enables the App to expose a user interface
            this.frontendAPI = context.getAPI(FrontendAPI.class);
            initializeWebResources();

            //TODO: Not needed by now
            // Device API gives access to devices connected to IOLITE
            // this.deviceAPI = context.getAPI(DeviceAPI.class);
            // initializeDeviceManager();

            // Environment API gives a access for rooms, current situation etc.
            this.environmentAPI = context.getAPI(EnvironmentAPI.class);
            LOGGER.debug("Current Situation: {}", this.environmentAPI.getCurrentSituationIdentifier());
            LOGGER.debug("Locations:");
            for (final Location location : this.environmentAPI.getLocations()) {
                LOGGER.debug("\t{}", location.getName());
            }

        } catch (final IOLITEAPINotResolvableException e) {
            throw new StartFailedException(MessageFormat.format("Start failed due to required but not resolvable AppAPI: {0}", e.getMessage()), e);
        } catch (final IOLITEPermissionDeniedException e) {
            throw new StartFailedException(MessageFormat.format("Start failed due to permission denied problems in the Energy UI: {0}", e.getMessage()), e);
        } catch (final StorageAPIException | FrontendAPIException e) {
            throw new StartFailedException(MessageFormat.format("Start failed due to an error in the App API Energy UI: {0}", e.getMessage()), e);
        }

        LOGGER.debug("Started");
    }

    @Override
    protected void stopHook() throws StopFailedException {
        LOGGER.debug("Stopping");

        // deregister the static assets
        if (this.disposeableAssets != null) {
            this.disposeableAssets.dispose();
        }

        LOGGER.debug("Stopped");
    }

    @Override
    protected void cleanUpHook() throws CleanUpFailedException {
        LOGGER.debug("Cleaning");
        LOGGER.debug("Cleaned");
    }

    @Override
    protected void initializeHook() throws InitializeFailedException {
        LOGGER.debug("Initializing");
        LOGGER.debug("Initialized");
    }

    private void initializeStorage() throws StorageAPIException {

        //TODO: Might be useful in the future
        // basically the Storage API provides a key/value storage for different data types

        // save an integer under the key 'test'
        // this.storageAPI.saveInt("test", 10);
        // now let's store a string
        // this.storageAPI.saveString("some key", "some value");

        // log the value of an entry, just to demonstrate
        // LOGGER.debug("loading 'test' from storage: {}", Integer.valueOf(this.storageAPI.loadInt("test")));
    }

    private final void initializeWebResources() throws FrontendAPIException {

        // go through static assets and register them
        final Map<URI, StaticResources.PathHandlerPair> assets = StaticResources.scanClasspath("dist", getClass().getClassLoader());
        this.disposeableAssets = FrontendAPIUtility.registerPublicHandlers(this.frontendAPI, assets);

        // index page
        final IOLITEHTTPRequestHandler indexPageRequestHandler = new PageWithEmbeddedSessionTokenRequestHandler(loadTemplate("dist/index.html"));

        //TODO: Customize here later
        this.frontendAPI.registerRequestHandler("", indexPageRequestHandler);
        this.frontendAPI.registerRequestHandler("index.html", indexPageRequestHandler);

        // default handler returning a not found status
        this.frontendAPI.registerDefaultRequestHandler(new App.NotFoundResponseHandler());

        // example JSON request handlers TODO: Later...
        // this.frontendAPI.registerRequestHandler("rooms", new App.RoomsResponseHandler());
        // this.frontendAPI.registerRequestHandler("devices", new App.DevicesResponseHandler());
        // this.frontendAPI.registerRequestHandler("get_devices.json", new App.DeviceJSONRequestHandler());
    }

    private String loadTemplate(final String templateResource) {
        try {
            return StaticResources.loadResource(templateResource, getClass().getClassLoader());
        } catch (final IOException e) {
            throw new InitializeFailedException("Loading templates failed", e);
        }
    }

    /**
     * A response handler for returning the "not found" response.
     */
    static class NotFoundResponseHandler extends FrontendAPIRequestHandler {

        @Override
        protected IOLITEHTTPResponse handleRequest(final IOLITEHTTPRequest request, final String subPath) {
            return new IOLITEHTTPStaticResponse(IOLITEHTTPResponse.HTML_CONTENT_TYPE);
        }
    }
}
