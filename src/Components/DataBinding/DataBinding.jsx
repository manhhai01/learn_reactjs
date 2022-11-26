import React, { Component } from 'react'

export default class DataBinding extends Component {

  product = {
    id: 1,
    name: "Iphone 14 pro max",
    price: 100,
    image: "http://i.pravatar.cc?u=77"
  }

  render() {
    let title = "Cybersoft"
    return (
      <div className="container">
        <p id="title"> Tên trung tâm: {title}</p>
        <hr />
        {this.renderCard()}
        <hr />
        <p>Lời chào {this.renderMessage()}</p>
      </div>
    )
  }

  renderMessage = () => {
    return "Hello cybersoft!"
  }

  renderCard = () => {
    return (
      <div className="card w-25">
        <img src={this.product.image} alt="..." />
        <div className="card-body">
          <p>{this.product.name}</p>
          <p>{this.product.id.price}</p>
          <button className="btn btn-success">Add to cart</button>
        </div>
      </div>
    )
  }
}
