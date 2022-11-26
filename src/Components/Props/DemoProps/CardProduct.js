import React, { Component } from 'react'

export default class CardProduct extends Component {
  render() {

    let {product} = this.props

    return (
      <div className="card">
        <img src={product.img} alt='...'></img>
        <div className="card-body">
            <p>{product.name}</p>
            <p>{product.price}</p>
            <button className="btn btn-success">Đặt mua</button>
        </div>
      </div>
    )
  }
}
