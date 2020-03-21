import React, { Component } from "react";
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { setMessages } from '../actions';


class Input extends Component {
    constructor(props) {
        super(props)
        this.state = {
            input: ''
        }
    }

    inputChange = (event) => {
        this.setState({input: event.target.value})
    }

    sendMessage = () => {
        const body = {"author": 'YOU', "content": this.state.input}
        const url = `https://wagon-chat.herokuapp.com/${this.props.selectedChannel}/messages`;
        const promise = fetch(url, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
      this.props.setMessages(this.props.selectedChannel)
      this.setState({input: ''})
    }

    render() {
        return (
                <div className="form-group input">
                    <input type="text" onChange={this.inputChange} value={this.state.input} className="form-control"/>
                    <input type="submit" onClick={this.sendMessage} className="btn btn-danger"/>
                </div>
        );
    }

}

const mapDispatchToProps = (dispatch) => {
    
    return bindActionCreators(
        {setMessages: setMessages },
        dispatch
    );
}

const mapStateToProps = (state) => {
    return {
        selectedChannel: state.selectedChannel
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(Input);