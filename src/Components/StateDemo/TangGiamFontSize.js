import React, { Component } from 'react'

export default class TangGiamFontSize extends Component {

  state = {
    fsize: 15
  }

  changeFontSize = (newFSize) => {
    this.setState({
      fsize: this.state.fsize + newFSize
    })
  }

  render() {

    return (
      <div className="container">
        <h3>Tăng giảm font size</h3>
        <p style={{fontSize: `${this.state.fsize}px`}}>Học lập trình tại Cybersoft</p>
        <button className="btn btn-primary" onClick={() => {
          this.changeFontSize(5)
        }}>+</button>
        <button className="btn btn-danger ml-4" onClick={() => {
          this.changeFontSize(-5)
        }}>-</button>
      </div>
    )
  }
}
