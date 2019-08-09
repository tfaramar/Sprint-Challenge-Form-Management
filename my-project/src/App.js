import React from 'react';

import RegisterForm from './components/Form';
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      user: {}
    };
  }

  render() {
    return (
      <div className="App">
        <RegisterForm />
      </div>
    );
  }
}

export default App;
