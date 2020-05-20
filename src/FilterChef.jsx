import React, { Component } from 'react'

class FilterChef extends Component {
  state = {
    selectedCheck: "all"
  }

  handleFilterChange = (event) => {
    console.log(event.target)

    this.setState({
      selectedCheck: event.target.value
    })
  }

  render() {
    return (
      <div className="form-check">
        <h3>Filter by chef</h3>
        <input type="radio" id="all" name="all" value="all" onChange={this.handleFilterChange} checked={ this.state.selectedCheck === "all"} />
        <label>All chefs</label>
        <br></br>

        <input type="radio" id="isabel" name="isabel" value="isabel" onChange={this.handleFilterChange} checked={ this.state.selectedCheck === "isabel"}/>
        <label>Chef Isabel</label>
        <br></br>

        <input type="radio" id="frankie" name="frankie" value="frankie" onChange={this.handleFilterChange} checked={ this.state.selectedCheck === "frankie"}/>
        <label>Chef Frankie</label>
        <br></br>

        <input type="radio" id="diva" name="diva" value="diva" onChange={this.handleFilterChange} checked={ this.state.selectedCheck === "diva"}/>
        <label>Chef Diva</label>
      </div>
    )
  }
}

export default FilterChef