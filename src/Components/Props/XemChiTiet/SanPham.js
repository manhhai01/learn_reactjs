import React, { Component } from 'react'

export default class SanPham extends Component {
    render() {

        let { product, xemChiTiet, themGioHang } = this.props

        return (
            <div className="card">
                <img src={product.hinhAnh} alt={product.tenSP}></img>
                <div className="card-body">
                    <p>{product.tenSP}</p>
                    <p>{product.giaBan.toLocaleString()} VNĐ</p>
                    <button className="btn btn-success" onClick={() => {
                        xemChiTiet(product)
                    }}>Xem chi tiết</button>
                    <button className="btn btn-danger ml-3" onClick={() => {
                        themGioHang(product)
                    }}><i className="fa fa-shopping-cart mr-2"></i>Thêm giỏ hàng</button>
                </div>
            </div>
        )
    }
}
