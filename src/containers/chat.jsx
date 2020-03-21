import React ,{ Component } from 'react';
import Message from './message';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setMessages } from '../actions/index'


class Chat extends Component {




    render() {
        let message = [];
        if (this.props.messages.messages) {
            message = this.props.messages.messages
            return(
                <div className="chat">
                    <h2>Channel</h2>
                    <div className="messages">
                        <Message />
                        {message.map((message, i) => {
                            return < Message key={i} message={message} />
                        })}
                    </div>
                </div>
            );
        } else {
            return(
                <div className="chat">
                    <h2>Channel</h2>
                    <div className="message">

                    </div>
                </div>
            );
        }
    }



}

const mapDispatchToProps = (dispatch) => {
    
    return bindActionCreators(
        { setMessages: setMessages },
        dispatch
    );
}

const mapStateToProps = (state) => {
    return {
        messages: state.messages
    }
}



export default connect(mapStateToProps,mapDispatchToProps)(Chat);