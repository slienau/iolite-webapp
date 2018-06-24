import React, { Component } from 'react';


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


class Tables extends Component {





  render() {
    return (
        <div class="table-responsive">
          <table class="table table-striped table-sm">
            <TableHead list={columnMetaData}> </TableHead>
          </table>
          </div>
    );
  }
}




export default Tables;
