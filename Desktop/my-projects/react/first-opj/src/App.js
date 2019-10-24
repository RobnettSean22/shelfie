import React, {Component} from 'react'
import './App.css';
import peopleInfo from './component/peopleInfo'



class App extends Component{
  constructor(){
    super()
    this.state= {
      info:peopleInfo,
      count: 0

    }
    this.next = this.next.bind(this)
    this.previous =this.previous.bind(this)
  }

  next(){
    (this.state.count === this.state.info.length -1)
    ?
      this.setState({
        count:0
      })
      :
    this.setState({
      count:this.state.count + 1
    })
  }

  previous(){
    (this.state.count === 0)
    ?
    this.setState({
      count:this.state.info.length -1
    })
    :
    this.setState({
      count:this.state.count -1
    })
  }
 
  render() {
    const {count} = this.state
    return (
      <body>
        <div className='App'>
          <h1>{peopleInfo[count].name.lastName}, {peopleInfo[count].name.firstName} {peopleInfo[count].name.middleInital}</h1>
          <h2>Born in: {peopleInfo[count].bornIn}</h2>
          <h2>Lives in: {peopleInfo[count].liveIn}</h2>
          <h2>Contact Info :  </h2>
            <ul>
              <li>Phone#: {peopleInfo[count].contacts.phoneNumber}</li>
              <li>Email: {peopleInfo[count].contacts.email}</li>
            </ul>
          <h2>Born in: {peopleInfo[count].bornIn}</h2>
          <button onClick={this.previous}>Previous</button>
          <button onClick={this.next}>Next</button>
          
        </div>
      </body>
    )
  }
}

export default App;