import React, {Component} from 'react';

import './tables.css';
import {connect} from "react-redux";


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
          <tbody className="headerRows">
          <tr  data-toggle="collapse" data-target={"#"+item.expId} aria-expanded="false">
            <td>{item.date.toDateString()}</td>
            <td>{item.consumption}</td>
            <td>$$</td>
          </tr>
          </tbody>
          <tbody className="collapse multi-collapse expRows" id={item.expId}>
              {item.content.map(trow =>(
              <tr>
                <td className="deviceCell">{trow.device + " (" + trow.room + ")"}</td>
                <td>{trow.value}</td>
                <td>{trow.costs}</td>
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

      console.log(this.props.visibleData);

      var dateFrom = new Date("2018-7-3");
      var dateTo = new Date("2018-8-3");
      var resArray = [];


        //adding device and room property
      this.props.visibleData.rooms.map(item=>(
          item.devices.map(device=>(
                device.usage.map(entry=>(

          entry.device = device.name
              ))
          ))
        ))

      this.props.visibleData.rooms.map(item=>(
          item.devices.map(device=>(
              device.usage.map(entry=>(

                  entry.room = item.name
              ))
      ))
  ))

      //getting values from visibleData
      this.props.visibleData.rooms.map(room=>(
          room.devices.map(device=>(
              resArray = resArray.concat(device.usage.filter((entry:any) =>{
                  var date = Date.parse(entry.timestamp);
                  return date > dateFrom.getTime() && date < dateTo.getTime();
            })
              )))
      ))



      //creating table

      var getDateArray = function(start, end) {

          var
              counter = 0,
              arr = new Array(),
              dt = new Date(start);

          while (dt <= end) {
              arr.push({"id": counter, "expId" : "exprow" + counter, "date" : new Date(dt), "content" : [], "consumption" : 0});
              dt.setDate(dt.getDate() + 1);
              counter++;
          }

          return arr;

      }

      var tableData = getDateArray(dateFrom, dateTo);

      //grouping data by day

      console.log(this.props.costs);
        var datalen = tableData.length;
      resArray.forEach(function (elem){
          var currDate = Date.parse(elem.timestamp);
          for(var i = 0; i < datalen; i++){
              if(currDate > tableData[i].date.getTime() && currDate < tableData[i+1].date.getTime()) {
                  tableData[i].content.push(elem);
                  tableData[i].consumption += elem.value;
                  //elem.costs =  elem.value * this.props.costs + " " + this.props.currency;
                  return false;
              }

          }
      })

      tableData.splice(-1, 1);


      console.log(tableData);
    return (
        <div id="table">
          <h1 className="h2">Energy consumption</h1>

          <div className="table-responsive">
            <table className="table table-striped table-sm">
              <TableHead list={columnMetaData}> </TableHead>
              <TableBody list={tableData}> </TableBody>
            </table>
          </div>
        </div>
    );
  }
}

/*
USAGE
pass value to functions to use with constant function
{this.props.price} to get current price
{this.props.currency} to get current selected currency
 */

function mapStateToProps(state) {


    return {
        price: state.settings.price,
        currency: state.settings.currency,
        visibleData: state.home.visibleData
    };
}

export default connect(mapStateToProps)(Tables);




