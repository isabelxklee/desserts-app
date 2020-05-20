import React, { Component } from 'react'

class NewDessert extends Component {
  state = {

  }
  render() {
    return (
      <div className="form">
        <form onSubmit={this.handleSubmit}>
          <label>Name: </label>
          <input type="text" value= {this.state.value} onChange={this.handleChange} />

          <label>Chef: </label>
          <input type="text" value= {this.state.value} onChange={this.handleChange} />

          <label>Flavor profile: </label>
          <input type="text" value= {this.state.value} onChange={this.handleChange} />

          <label>Front image: </label>
          <input type="text" value= {this.state.value} onChange={this.handleChange} />

          <label>Back image: </label>
          <input type="text" value= {this.state.value} onChange={this.handleChange} />
          
          <input type="submit" value="Submit" />
      </form>
      </div>
    )
  }
}

export default NewDessert