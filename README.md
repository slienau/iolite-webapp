#### You can take a look at our current state here: 
[http://217.163.23.24:9999](http://217.163.23.24:9999)  (obtain [credentials](https://gitlab.tubit.tu-berlin.de/aal-ss-18/data-engine-user-interface/issues/2))

<br />

[![build status](https://gitlab.tubit.tu-berlin.de/aal-ss-18/data-engine-user-interface/badges/dev/build.svg)](https://gitlab.tubit.tu-berlin.de/aal-ss-18/data-engine-user-interface/commits/dev)


# IOLite App (Data Engine UI)

Modul Ambient Assisted Living (BINF-SWT-AAL), summer term 2018, group 3.

(Original project home: [https://gitlab.tubit.tu-berlin.de/aal-ss-18/data-engine-user-interface](https://gitlab.tubit.tu-berlin.de/aal-ss-18/data-engine-user-interface))
 
  
## Features

* show energy consumption as charts
* choose chart type
* show energy consumption as table
* select devices to be shown
* select date range and intervals
* set default behavior and electricity price

![Energy UI APP Screenshot](energy_ui_screenshot.png)

<br />
 
 
## How to use

### Development
First run `npm install` to install all needed modules for development, and then run `npm run server` to start the local development webserver. Once the bundle is packed, the Browser will open the URL automatically. Furthermore, it will automatically repack and refresh the webpage as soon any filechanges are detected.

### Build
You can use attached [Maven Wrapper](https://github.com/takari/maven-wrapper) to build this project. No actual Maven installation is needed on your system (however you need JDK 8 to be installed).

Just run `./mvnw package` to build the project.
 
## Built With

* [React](https://reactjs.org/) - JavaScript library for building user interfaces
* [Redux](https://redux.js.org/) - state container for JavaScript apps
* [webpack](https://webpack.js.org/) - JavaScript bundler
* [Babel](https://babeljs.io/) - JavaScript compiler
* [Bootstrap](https://getbootstrap.com/) - Sleek, intuitive, and powerful front-end framework
* [Chart.js](https://www.chartjs.org/) - Simple yet flexible JavaScript charting for designers & developers
* [react-chartjs-2](https://github.com/jerairrest/react-chartjs-2/) - React wrapper for Chart.js 2
* [ReactJS Datepicker](https://reactdatepicker.com/) - a datepicker component for React.
* [React Icons](http://react-icons.github.io/react-icons/index.html) - icons for React projects

Tools:
* [npm](https://www.npmjs.com/) - package manager for JavaScript 
* [Maven](https://maven.apache.org/) - Build automation tool and dependency management
* [GitLab](https://about.gitlab.com/) - Git repository manager, wiki, issue tracking and CI/CD



## Authors

* Anton Rudacov
* Daniel Yermakov
* Daniel Sebastian Lienau 
* Tom Gill


## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details

