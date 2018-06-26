import React, { Component } from 'react';

import './tables.css';

var columnMetaData = [
    {
        name : "id",
        title : "Device ID"
    },
    {
        name : "timestamp",
        title : "Time"
    },
    {
        name : "cons",
        title : "Consumption"
    }
]

var TableData = [
    {
      id : "1",
      timestamp : "1-06-2018",
      cons : "35.6"
    },
    {
        id : "2",
        timestamp : "2-06-2018",
        cons : "37.0"
    },
    {
        id : "1",
        timestamp : "3-06-2018",
        cons : "45.2"
    }

]


const TableHead = (prop) => {
    //console.log(prop.list);
    return(

            <thead>
              <tr>
                {prop.list.map(item => (
                    <th>{item.title}</th>

            ))}
              </tr>
            </thead>

)
}


const TableBody = (prop) =>{
    return(
        <tbody>
        <tr>
        </tr>
        </tbody>
)}




class Tables extends Component {

  render() {
    return (
        <div id="table">
        <div class="table-responsive">
          <table class="table table-striped table-sm">
            <TableHead list={columnMetaData}> </TableHead>
            <TableBody list={TableData}> </TableBody>
          </table>
          </div>
        </div>
    );
  }
}




export default Tables;


