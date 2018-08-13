import React, {Component} from 'react';
import {connect} from "react-redux";



const TableDev = (prop) => {
    return (
        <React.Fragment>
            {prop.list.map(room =>(
                room.devices.map(device=>(
                    <React.Fragment>
                        <tbody>
                            <tr data-toggle="collapse" data-target={"#"+device.name+"expanded"} aria-expanded="false">
                                <td>{device.name}</td>
                                <td>{device.consumption}</td>
                                <td>{(device.consumption * prop.price).toFixed(2)} {prop.currency}</td>
                            </tr>
                        </tbody>
                        <tbody  className="collapse multi-collapse expRows" id={device.name+"expanded"}>
                            {device.usage.map(usage=>(
                                <tr>
                                    <td>{usage.timestamp}</td>
                                    <td>{usage.value}</td>
                                    <td>{(usage.value * prop.price).toFixed(2)} {prop.currency}</td>
                                </tr>
                            ))}
                        </tbody>
                    </React.Fragment>
                ))
            ))}
        </React.Fragment>
    )
}


export default class TableDevices extends Component{
    render(){
        console.log(this.props);
        var localVisibleData = JSON.parse(JSON.stringify(this.props.visibleData));
        console.log(localVisibleData);
        localVisibleData.rooms.map(room =>(
            room.devices.map(device=>(
                device.consumption = 0
            )))
        )

        localVisibleData.rooms.map(room=>(
            room.devices.map(device=>
                device.usage.map(item=>(
                    device.consumption += item.value
                ))
            )
        ))

        return(
            <TableDev list={localVisibleData.rooms} price={this.props.price} currency={this.props.currency}></TableDev>
        )
    }

}

