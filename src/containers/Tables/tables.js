import React, {Component} from 'react';

import './tables.css';

const ExampleData = [{
  "timestamp": "1516269028831",
  "property": "powerUsage",
  "deviceid": "knx_office_ledsocket",
  "value": "0.0"
}, {
  "timestamp": "1516286483527",
  "property": "powerUsage",
  "deviceid": "knx_office_ledsocket",
  "value": "0.0"
}, {
  "timestamp": "1516286483536",
  "property": "powerUsage",
  "deviceid": "knx_office_ledsocket",
  "value": "0.0"
}, {
  "timestamp": "1516286483625",
  "property": "powerUsage",
  "deviceid": "knx_office_ledsocket",
  "value": "0.0"
}, {
  "timestamp": "1507124268387",
  "property": "powerUsage",
  "deviceid": "OpenZWaveNode3",
  "value": "2.6"
}, {
  "timestamp": "1507124308447",
  "property": "powerUsage",
  "deviceid": "OpenZWaveNode3",
  "value": "2.6"
}, {
  "timestamp": "1507127908293",
  "property": "powerUsage",
  "deviceid": "OpenZWaveNode3",
  "value": "2.5"
}, {
  "timestamp": "1507131507794",
  "property": "powerUsage",
  "deviceid": "OpenZWaveNode3",
  "value": "2.6"
}, {
  "timestamp": "1507135107710",
  "property": "powerUsage",
  "deviceid": "OpenZWaveNode3",
  "value": "2.5"
}, {
  "timestamp": "1507138707625",
  "property": "powerUsage",
  "deviceid": "OpenZWaveNode3",
  "value": "2.5"
}, {
  "timestamp": "1507142307542",
  "property": "powerUsage",
  "deviceid": "OpenZWaveNode3",
  "value": "2.5"
}, {
  "timestamp": "1507145908017",
  "property": "powerUsage",
  "deviceid": "OpenZWaveNode3",
  "value": "2.5"
}, {
  "timestamp": "1507149508068",
  "property": "powerUsage",
  "deviceid": "OpenZWaveNode3",
  "value": "2.5"
}, {
  "timestamp": "1507153107553",
  "property": "powerUsage",
  "deviceid": "OpenZWaveNode3",
  "value": "2.5"
}, {
  "timestamp": "1507156707292",
  "property": "powerUsage",
  "deviceid": "OpenZWaveNode3",
  "value": "2.5"
}, {
  "timestamp": "1507160307121",
  "property": "powerUsage",
  "deviceid": "OpenZWaveNode3",
  "value": "2.5"
}, {
  "timestamp": "1507163907038",
  "property": "powerUsage",
  "deviceid": "OpenZWaveNode3",
  "value": "2.5"
}, {
  "timestamp": "1507167507236",
  "property": "powerUsage",
  "deviceid": "OpenZWaveNode3",
  "value": "2.5"
}];


var columnMetaData = [
  {
    name: "timestamp",
    title: "Time"
  },
  {
    name: "property",
    title: "Property"
  },
  {
    name: "deviceid",
    title: "Id"
  },
  {
    name: "value",
    title: "Value"
  }
]


const TableHead = (prop) => {
  return (

      <thead>
      <tr>
        {prop.list.map(item => (
            <th>{item.title}</th>

        ))}
      </tr>
      </thead>

  )
}


const TableBody = (prop) => {
  return (
      <tbody>
      {prop.list.map(item => (
          <tr>
            <th>{item.timestamp}</th>
            <th>{item.property}</th>
            <th>{item.deviceid}</th>
            <th>{item.value}</th>
          </tr>
      ))}

      </tbody>
  )
}


class Tables extends Component {

  render() {
      ExampleData.sort( function (a, b){
          if(a.timestamp < b.timestamp)
              return 1;
          return -1;
      })

      ExampleData.map(item =>(
          item.timestamp = new Date(parseInt(item.timestamp, 10)).toLocaleString()
      ))


      var path = require("path");

      var pth = path.join( '..', '..', 'resources/power.json');
 

    return (
        <div id="table">
          <h1 className="h2">Energy consumption</h1>

          <div class="table-responsive">
            <table class="table table-striped table-sm">
              <TableHead list={columnMetaData}> </TableHead>
              <TableBody list={ExampleData}> </TableBody>
            </table>
          </div>
        </div>
    );
  }
}


export default Tables;


