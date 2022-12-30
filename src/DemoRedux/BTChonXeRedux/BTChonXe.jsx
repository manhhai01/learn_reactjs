import React, { Component } from 'react'

//ket noi redux
import {connect} from 'react-redux'

// dinh nghia ham lay du lieu tu redux ve
const mapStateToProps = (rootReducer) => {
    return {
        imgCar: rootReducer.stateImgCar
    }
}

// dinh nghia ham gui du lieu len redux
const mapDispatchToProps = (dispatch) => {
    return {
        changeColor: (newColor) => {
            // console.log('new color', newColor)
            const action = {
                type: 'CHANGE_COLOR',
                newColor
            }

            // dua du lieu len store
            dispatch(action)
        }
    }
}

class BTChonXe extends Component {
    render() {
        console.log(this.props)
        return (
            <div className="container">
                <h3>BÀI TẬP CHỌN XE</h3>
                <div className="row">
                    <div className="col-6">
                        <img src={this.props.imgCar} alt="black car" className="w-100" />
                    </div>
                    <div className="col-6">
                        <div className="row">
                            <div className="col-3">
                                <button className="btn" style={{ backgroundColor: 'red', color: '#fff' }} onClick={
                                    () => this.props.changeColor('red')
                                }>RED</button>
                            </div>
                            <div className="col-3">
                                <button className="btn" style={{ backgroundColor: 'black', color: '#fff' }} onClick={
                                    () => this.props.changeColor('black')
                                }>BLACK</button>
                            </div>
                            <div className="col-3">
                                <button className="btn" style={{ backgroundColor: 'silver', color: '#fff' }} onClick={
                                    () => this.props.changeColor('silver')
                                }>SILVER</button>
                            </div>
                            <div className="col-3">
                                <button className="btn" style={{ backgroundColor: '#EEE', color: '#fff' }} onClick={
                                    () => this.props.changeColor('white') 
                                }>wHITE</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(BTChonXe)
