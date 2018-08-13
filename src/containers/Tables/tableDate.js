import React, {Component} from 'react';
import {connect} from "react-redux";
import {TableHead} from "./tables.js"


const TableBody = (prop) => {
    return (
        <React.Fragment>
            {prop.list.map(item => (
                <React.Fragment>
                    <tbody className="headerRows">
                        <tr  data-toggle="collapse" data-target={"#"+item.expId} aria-expanded="false">
                            <td>{item.date.toDateString()}</td>
                            <td>{item.consumption}</td>
                            <td>{(item.consumption * prop.price).toFixed(2)} {prop.currency}</td>
                        </tr>
                    </tbody>
                    <tbody className="collapse multi-collapse expRows" id={item.expId}>
                        {item.content.map(trow =>(
                            <tr>
                                <td className="deviceCell">{trow.device + " (" + trow.room + ")"}</td>
                                <td>{trow.value}</td>
                                <td>{(trow.value * prop.price).toFixed(2)} {prop.currency}</td>
                            </tr>
                        ))}
                    </tbody>
                </React.Fragment>

            ))}
    </React.Fragment>
    )

}

export default class TableDate extends Component {

    render() {

        //Copy data by value
        var localVisibleData = JSON.parse(JSON.stringify(this.props.visibleData));
        console.log(localVisibleData);

        /*
         * Adding to each usage entry device and room property.
         */

        localVisibleData.rooms.map(item=>(
            item.devices.map(device=>(
                device.usage.map(entry=>(

                    entry.device = device.name
                ))
            ))
        ))

        localVisibleData.rooms.map(item=>(
            item.devices.map(device=>(
                device.usage.map(entry=>(

                    entry.room = item.name
                ))
            ))
        ))


        /*
         *Extracting all consumption data in one array
         */
        var resArray = [];
        localVisibleData.rooms.map(room=>(
            room.devices.map(device=>(
                resArray = resArray.concat(device.usage)
            ))
        ))

        /*
                     *Creating array with main rows
         */

        var dateTo = Math.max.apply(Math, resArray.map(function(o) { return new Date(o.timestamp); }))
        var dateFrom = Math.min.apply(Math, resArray.map(function(o) { return new Date(o.timestamp); }))
        var tableData = getDateArray(dateFrom, dateTo);



        /*
         *Grouping consumption data by day. (Adding as content property in main-rows-array)
         */

        var datalen = tableData.length;
        resArray.forEach(function (elem){
            var currDate = new Date(elem.timestamp).getTime();
            for(var i = 0; i < datalen; i++){
                if(currDate == tableData[i].date.getTime()) {
                    tableData[i].content.push(elem);
                    tableData[i].consumption += elem.value;
                    return false;
                }
            }
        })


        return(
            <TableBody list={tableData} price={this.props.price} currency={this.props.currency}></TableBody>
        );
    }
}


/*getDateArray
-Creating array of days with special fields between two dates. Result array is using for main rows in the table
-@param: {Date} start, {Date} end
-@return: {Array} Array like
[{
    consumption: 0                      contents total consumption of all devices in this day
​​​    content: Array [ {…} ]              contents data with consumption of each device in this day (using for expanding rows)
    date: Date 2018-07-03T18:27:00.000Z​
    expId: "exprow0"                    tag, used to link main rows with expanding rows in HTML
​    id: 0
}
]
* */

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

