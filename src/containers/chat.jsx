import React ,{ Component } from 'react';
import Message from './message'


class Chat extends Component {

    render() {
        return(
            <div className="chat">
                <h2>Channel</h2>
                <div className="messages">
                    <Message />
                    {/* {this.props.messages.map(message => {
                        return < Message message= {message} />
                    })} */}
                </div>
            </div>
        );
    }



}

export default Chat;