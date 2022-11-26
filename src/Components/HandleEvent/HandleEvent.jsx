import React, { Component } from 'react'

export default class HandleEvent extends Component {
  render() {
    return (
      <div className="container">
        <button onClick={this.showMessage}>Click me!</button>
        <hr />
        {/* <button onClick={this.sayHello.bind(this, "Hải")}>Say hello!</button> */}
        <button onClick={() => {this.sayHello('Hải')}}>Say hello!</button>
      </div>
    )
  }

  showMessage = () => {
    alert("Hello, you clicked me!")
  }

  sayHello = (name) => {
    alert("Hello, " + name)
  }
}
