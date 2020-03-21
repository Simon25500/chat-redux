// TODO: add and export your own actions


const setChannels = (channels) => {


    return {
        type: 'SET_CHANNELS',
        payload: channels
    }
}

 const selectChannel = (channel) => {
    return {
        type: 'SELECT_CHANNEL',
        payload: channel
    }
}


const setMessages = (selectedChannel) => {

    const url = `https://wagon-chat.herokuapp.com/${selectedChannel}/messages`;
    const promise = fetch(url, {
        method: 'GET',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }).then(r => r.json() );
      
    return {
        type: 'SET_MESSAGES',
        payload: promise
    }
}

export {selectChannel, setChannels, setMessages};