import React, {Component} from 'react';

import './tables.css';

const ExampleData = [{
  id: 1,
  device: "1.5.2018",
  consumption: 215,
  costs: 21.5,
  content: [
      {
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
      }
  ]},{
   id: 2,
   device: "2.5.2018",
   consumption: 220,
   costs: 22,
   content: [
       {
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
       }

    ]}, {
    id: 3,
    device: "3.5.2018",
    consumption: 270,
    costs: 38,
    content: [{
        "timestamp": "1507160307121",
        "property": "powerUsage",
        "deviceid": "OpenZWaveNode1",
        "value": "2.5"
    }, {
        "timestamp": "1507163907038",
        "property": "powerUsage",
        "deviceid": "OpenZWaveNode2",
        "value": "2.5"
    }, {
        "timestamp": "1507167507236",
        "property": "powerUsage",
        "deviceid": "OpenZWaveNode3",
        "value": "2.5"
    }]

    }


];

var columnMetaData = [
  {
    name: "deviceid",
    title: "Device"
  },
  {
    name: "value",
    title: "Consumption"
  },
  {
    name: "costs",
    title: "Costs"
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
      <React.Fragment>
      {prop.list.map(item => (
          <React.Fragment>
          <tbody>
          <tr data-toggle="collapse" data-target={"#"+item.expId} aria-expanded="false">
            <td>{item.device}</td>
            <td>{item.consumption}</td>
            <td>{item.costs}</td>
          </tr>
          </tbody>
          <tbody class="collapse multi-collapse" id={item.expId}>
              {item.content.map(trow =>(
              <tr>
                <td>{trow.deviceid}</td>
                <td>{trow.value}</td>
                <td>$$</td>
            </tr>
          ))}
          </tbody>
          </React.Fragment>

      ))}
</React.Fragment>
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

      ExampleData.map(item=>(
          item.expId = "expanded_row" + item.id
      ))


      console.log(ExampleData);

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


