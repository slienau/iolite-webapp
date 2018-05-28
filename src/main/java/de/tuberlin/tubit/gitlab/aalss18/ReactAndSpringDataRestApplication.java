package de.tuberlin.tubit.gitlab.aalss18;

import de.iolite.api.IOLITEAPIProvider;
import de.iolite.app.AbstractIOLITEApp;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import javax.annotation.Nonnull;

@SpringBootApplication
public class ReactAndSpringDataRestApplication extends AbstractIOLITEApp {

    public static void main(String[] args) {

        SpringApplication.run(ReactAndSpringDataRestApplication.class, args);
    }

    @Override
    protected void cleanUpHook() {

    }

    @Override
    protected void initializeHook() {

    }

    @Override
    protected void startHook(@Nonnull IOLITEAPIProvider ioliteapiProvider) {

    }

    @Override
    protected void stopHook() {

    }
}
