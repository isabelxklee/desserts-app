import React, { Component } from 'react'
import Dessert from './Dessert.jsx'

class AllDesserts extends Component {
  state = {
    checkedOption: "all"
  }

  handleFilterChange = (event) => {
    this.setState({
      checkedOption: event.target.value
    })

    console.log(`Toggle ${event.target.value}!`)
  }

  pickDesserts = () => {
    return this.props.desserts.filter((dessert) => {
      return dessert.chef === this.state.checkedOption
    })
  }

  render() {
    let filteredDesserts = this.props.desserts

    if (this.state.checkedOption !== "all") {
      filteredDesserts = this.pickDesserts()
    }

    let dessertsArr = filteredDesserts.map((dessert) => {
      return <Dessert
        key = { dessert.id }
        dessert = { dessert }
        />
    })

    return (
      <div className="desserts">
        <h3>Filter by chef</h3>
        <input type="radio" id="all" name="all" value="all" onChange={this.handleFilterChange} checked={ this.state.checkedOption === "all"} />
        <label>All chefs</label>
        <br></br>

        <input type="radio" id="isabel" name="isabel" value="isabel" onChange={this.handleFilterChange} checked={ this.state.checkedOption === "isabel"}/>
        <label>Chef Isabel</label>
        <br></br>

        <input type="radio" id="frankie" name="frankie" value="frankie" onChange={this.handleFilterChange} checked={ this.state.checkedOption === "frankie"}/>
        <label>Chef Frankie</label>
        <br></br>

        <input type="radio" id="diva" name="diva" value="diva" onChange={this.handleFilterChange} checked={ this.state.checkedOption === "diva"}/>
        <label>Chef Diva</label>
      
        <h3>All Desserts</h3>
        { dessertsArr }
      </div>
    )
  }
}

export default AllDesserts