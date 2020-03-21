import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import { selectChannel, setMessages } from '../actions/index'

class Channel extends Component {

    select = () => {
        this.props.selectChannel(this.props.channel);
        this.props.setMessages(this.props.channel)
    }

    render() {
        let channelClass = "channel"
        if (this.props.channel === this.props.selectedChannel){
            channelClass += ' selected'
        }
        return(
            <p className={channelClass} onClick={this.select} >#{this.props.channel}</p>
        );
    }

}


const mapDispatchToProps = (dispatch) => {
    
    return bindActionCreators(
        { selectChannel: selectChannel,
         setMessages: setMessages },
        dispatch
    );
}

const mapStateToProps = (state) => {
    return {
        selectedChannel: state.selectedChannel
    }
}


export default connect(mapStateToProps, mapDispatchToProps)(Channel)

