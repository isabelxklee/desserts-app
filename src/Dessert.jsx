import React, { Component } from 'react'

class Dessert extends Component {
  render() {
    let { name, image, chef, ["flavor profile"]: flavor } = this.props.dessert

    return (
      <div className="card">
        <img src={image} alt={name}/>
        <p>{name}</p>
        <p>Chef {chef}</p>
        <p>Flavor: {flavor}</p>
      </div>
    )
  }
}

export default Dessert