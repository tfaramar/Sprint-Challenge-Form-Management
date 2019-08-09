import React from 'react';
import axios from 'axios';

import RegisterForm from './components/Form';
import Card from './components/Card';
import './App.css';

class App extends React.Component {

  constructor() {
    super();
    this.state = {
      foods: []
    };
  }

  componentDidMount(){
    this.getUsers();
  }

  getUsers = () => {
    axios.get('http://localhost:5000/api/restricted/data')
      .then(res => {
        console.log(res)
        this.setState({
          foods: res.data
        })
        console.log(this.state.foods);
      })
      .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="App">
        <RegisterForm />
        <Card name={'burger'} course={'main'} technique={'grill'}/>
      </div>
    );
  }
}

export default App;
