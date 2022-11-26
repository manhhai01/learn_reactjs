import React, { Component } from 'react'

export default class RenderArray extends Component {

  products = [
    { id: 1, name: 'black car', img: './images/products/black-car.jpg', price: 5000 },
    { id: 2, name: 'red car', img: './images/products/red-car.jpg', price: 4000 },
    { id: 3, name: 'silver car', img: './images/products/silver-car.jpg', price: 7000 },
    { id: 4, name: 'white car', img: './images/products/white-car.jpg', price: 6500 },
  ];

  renderCarProduct = () => {
    // let result = [];
    // for(let product of this.products) {
    // let tr = (
    //   <tr key={product.id}>
    //     <td>{product.id}</td>
    //     <td>{product.id}</td>
    //     <td><img src={product.img} alt={product.name} width="50" height="50"></img></td>
    //     <td>{product.price}</td>
    //     <td></td>
    //   </tr>
    // )
    //   result.push(tr)
    // }

    let result = this.products.map((product, index) => {
      return <tr key={product.id}>
        <td>{product.id}</td>
        <td>{product.id}</td>
        <td><img src={product.img} alt={product.name} width="50" height="50"></img></td>
        <td>{product.price}</td>
        <td></td>
      </tr>
    })

    return result
  }

  renderCard = () => {
    let result = this.products.map((product, index) => {
      return <div className="col-3" key={index}>
        <div className="card">
          <div className="card-header bg-dark text-white">
            <h3>{product.name}</h3>
          </div>
          <img src={product.img} alt={product.name} className="w-100"></img>
          <div className="card-body">
            <p>{product.price}</p>
            <button className="btn btn-success">Add to cart</button>
          </div>
        </div>
      </div>
    })

    return result
  }

  render() {
    return (
      <div className="container">
        <h3>Danh sách xe hơi</h3>
        <table className="table">
          <thead>
            <tr>
              <th>ID</th>
              <th>NAME</th>
              <th>IMAGE</th>
              <th>PRICE</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {this.renderCarProduct()}
          </tbody>
        </table>

        <div className="row mt-5">
          {this.renderCard()}
        </div>
      </div>
    )
  }
}
