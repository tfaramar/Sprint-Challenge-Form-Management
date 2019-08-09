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
    this.getFoods();
  }

  getFoods = () => {
    axios.get('http://localhost:5000/api/restricted/data')
      .then(res => {
        console.log(res)
        this.setState({
          foods: res.data
        });
      })
      .catch(error => console.log(error))
  }

  componentDidUpdate(){
    console.log(this.state.foods);
  }

  render() {
    return (
      <div className="App">
        <RegisterForm />
        {this.state.foods.map(food => (
          <Card name={food.name} course={food.course} technique={food.technique}/>
        ))}
        
      </div>
    );
  }
}

export default App;
