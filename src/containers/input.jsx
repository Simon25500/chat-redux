import React, { Component } from "react";

class Input extends Component {

    render() {
        return (
                <div className="form-group input">
                    <input type="text" className="form-control"/>
                    <input type="submit" className="btn btn-danger"/>
                </div>
        );
    }

}


export default Input;