import React from 'react';
import NavBar from '../containers/navbar'
import Chat from '../containers/chat'
import Input from '../containers/input'

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <div className="chat">
        <Chat />
        <Input />
      </div>
    </div>
  );
};

export default App;

