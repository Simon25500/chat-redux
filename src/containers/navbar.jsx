import React, { Component } from "react";

class NavBar extends Component {

    render (){
        return(
            <div className="navbar">
                <div className="left-nav">
                    <img
                     src="https://uikit.lewagon.com/assets/logo-0c157df32d93155001ae8d8b1b7740b3082e698b4ad0cc91792e8725deb68d85.png" 
                     alt="le wagon"
                     width='50'/>
                </div>
                <div className="right-nav">
                    <h3>Redux Chat</h3>
                    <p>#general</p>
                </div>
            </div>
        );
    };
}

export default NavBar;