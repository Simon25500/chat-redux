import React, { Component } from "react";
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setChannels } from '../actions'
import Channel from './channel'


class NavBar extends Component {
    constructor(props) {
        super(props)
        this.state = { 
            input: "",
            inputClass: 'form-group add-input hidden'

        }
    }

    


    inputChange = (event) => {
        this.setState({input: event.target.value})
      
    }
    
    sendinput = () => {
        this.props.setChannels(this.state.input)
        this.addChanel();
        this.setState({input: ''})
    }


    addChanel = () => {
        if (this.state.inputClass === 'form-group add-input') {
            this.setState({inputClass: 'hidden' });
        } else {
            this.setState({inputClass: 'form-group add-input' });
        }
    }


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
                    <span className="add"  onClick={this.addChanel}>Add a channel +</span>
                    <div className={this.state.inputClass}>
                        <input type="text" value={this.state.input} className="form-control" onChange={this.inputChange.bind(this)} />
                        <input type="submit" value="Add" onClick={this.sendinput} className="btn btn-danger"/>
                    </div>
                    {this.props.channels.map((channel, i) => {
                        return <Channel key={i} channel={channel} />
                    })}
                </div>
            </div>
        );
    };
}

const mapDispatchToProps = (dispatch) => {

    return bindActionCreators(
        { setChannels: setChannels },
        dispatch
    );
}

const mapStateToProps = (state) => {
    return {
        channels: state.channels
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);