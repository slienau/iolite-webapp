import React from "react";

export class Leftsidebar extends React.Component {
    render() {
        return (
            <nav id="chartviewsidebar">
                <h4>Living Room</h4>
                <label className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" />
                    <span className="custom-control-indicator"></span>
                    TV
                </label>
                <label className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" />
                    <span className="custom-control-indicator"></span>
                    Hifi
                </label>

                <h4>Kitchen</h4>
                <label className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" />
                    <span className="custom-control-indicator"></span>
                    Stove
                </label>
                <label className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" />
                    <span className="custom-control-indicator"></span>
                    Fridge
                </label>
                <label className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input" />
                    <span className="custom-control-indicator"></span>
                    Oven
                </label>

            </nav>
        );
    }
}