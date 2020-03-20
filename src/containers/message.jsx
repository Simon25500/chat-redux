import React,{ Component } from 'react';

class Message extends Component {

    render(){
        return(
            <div className="message">
                <div className="message-header">
                    <h4>name</h4>
                    <span>date</span>
                </div>
                <p>content</p>
            </div>
        );
    }
}


export default Message;