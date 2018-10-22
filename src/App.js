import React, { Component } from 'react'
import Header from './component/Header'
import SetupForm from './container/SetupForm'
import Chat from './container/Chat'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <SetupForm />
        <Chat />
      </div>
    );
  }
}

export default App;
