import React, {Component} from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard'



class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
         
    }
  }

  render() {
    return (
      <div>
        <Dashboard/>
      </div>
    )
  }
}

export default App
