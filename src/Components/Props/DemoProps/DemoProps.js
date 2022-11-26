import React, { Component } from 'react'
import CardProduct from './CardProduct'

export default class DemoProps extends Component {

  product1 = {
    id: 1, 
    name: 'Iphone X', 
    price: 1000,
    img: 'https://picsum.photos/200'
  }

  product2 = {
    id: 2, 
    name: 'SamSung Glaxy', 
    price: 1500,
    img: 'https://picsum.photos/100'
  }

  render() {
    return (
      <div className="container">
        <div className="d-flex">
          <div className="w-25">
            <CardProduct product={this.product1} />
          </div>
          <div className="w-25 ml-5">
            <CardProduct product={this.product2} />
          </div>
        </div>
      </div>
    )
  }
}
