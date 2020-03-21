import React,{ Component } from 'react';

class Message extends Component {

    render(){
        if (this.props.message !== undefined){
            return(
                <div className="message">
                    <div className="message-header">
                        <h4>{this.props.message.author}</h4>
                        <span>{this.props.message.created_at}</span>
                    </div>
                    <p>{this.props.message.content}</p>
                </div>
            );
        } else {
            return(
                <div></div>
            );
        }
    }
}


export default Message;