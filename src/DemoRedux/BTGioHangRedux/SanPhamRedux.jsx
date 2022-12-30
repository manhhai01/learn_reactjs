import React, { Component } from 'react'
import { connect } from 'react-redux'

class SanPhamRedux extends Component {
    render() {
        let {sanPham} = this.props;
        return (
            <div className="card">
                <img src={sanPham.hinhAnh} alt="..." height={350} />
                <div className="card-body">
                    <p>{sanPham.tenSP}</p>
                    <p>{sanPham.giaBan.toLocaleString()}</p>
                    <button className="btn btn-primary" onClick={() => {
                        this.props.themGioHang(sanPham)
                    }}>Thêm vào giỏ</button>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (rootReducer) => {
    return {}
}

const mapDispatchToProps = (dispatch) => {
    return {
        themGioHang: (sanPhamClick) =>{
            // console.log({sanPhamClick})
            let spGH = {...sanPhamClick, soLuong: 1}

            // tao ra action gui len redux
            const action = {
                type: 'THEM_GIO_HANG',
                spGH
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SanPhamRedux)
