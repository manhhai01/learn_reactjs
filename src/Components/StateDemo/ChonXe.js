import React, { Component } from 'react'

export default class ChonXe extends Component {

    state = {
        srcImage: './images/products/black-car.jpg'
    }

    handleChangeSourceImage = (color) => {
        this.setState({ srcImage: `./images/products/${color}-car.jpg` })
    }

    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-6">
                        <img src={this.state.srcImage} alt="Black car" className="w-100"></img>
                    </div>
                    <div className="col-6">
                        <div className="row">
                        <div className="col-3">
                            <button className="btn text-white" style={{ backgroundColor: 'black' }} onClick={() => {
                                this.handleChangeSourceImage('black')
                            }}>Black Car</button>
                        </div>
                        <div className="col-3">
                            <button className="btn text-white" style={{ backgroundColor: 'red' }} onClick={() => {
                                this.handleChangeSourceImage('red')
                            }}>Red Car</button>
                        </div>
                        <div className="col-3">
                            <button className="btn" style={{ backgroundColor: 'silver', color: 'blue' }} onClick={() => {
                                this.handleChangeSourceImage('silver')
                            }}>Sliver Car</button>
                        </div>
                        <div className="col-3">
                            <button className="btn" style={{ backgroundColor: '#EEE', color: 'blue'}} onClick={() => {
                                this.handleChangeSourceImage('white')
                            }}>White Car</button>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
