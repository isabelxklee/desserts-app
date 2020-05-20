import React, { Component } from 'react'

class Dessert extends Component {
  state = {
    toggleImage: true
  }

  handleToggleImage = (event) => {
    this.setState({
      toggleImage: !this.state.toggleImage
    })
  }

  render() {
    let { name, "image-front": front, "image-back": back, chef, "flavor profile": flavor } = this.props.dessert

    return (
      <div className="card">
        { this.state.toggleImage
        ? <img src={front} alt={name} onClick={this.handleToggleImage}/>
        : <img src={back} alt={name} onClick={this.handleToggleImage}/>
        }

        <h3>{name}</h3>
        <p>Chef {chef}</p>
        <p>Flavor: {flavor}</p>
      </div>
    )
  }
}

export default Dessert