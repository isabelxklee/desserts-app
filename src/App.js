import React, { Component } from 'react'
import './App.css'
import AllDesserts from './AllDesserts.jsx'
// import FilterChef from './FilterChef.jsx'

class App extends Component {
  state = {
    desserts: []
  }

  componentDidMount() {
    fetch("http://localhost:3000/desserts")
    .then(r => r.json())
    .then((dessertsArr) => {
      this.setState({
        desserts: dessertsArr
      })
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Desserts!</h1>
        {/* <FilterChef /> */}
        <AllDesserts desserts = { this.state.desserts } />
        
        {/* <SearchDessert /> */}
      </div>
    )
  }
}

export default App