import React, { Component } from 'react'
import Dessert from './Dessert.jsx'

class AllDesserts extends Component {
  render() {
    let dessertsArr = this.props.desserts.map((dessert) => {
      return <Dessert
        key = { dessert.id }
        dessert = { dessert }
        />
    })

    return (
      <div className="desserts">
        <h3>All Desserts</h3>
        { dessertsArr }
      </div>
    )
  }
}

export default AllDesserts