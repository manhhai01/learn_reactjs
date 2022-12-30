import React, { Component } from 'react'

export default class GioHang extends Component {


    renderGioHang = () => {
        let { gioHang, xoaGioHang, thayDoiSoLuong } = this.props
        return gioHang.map((spGioHang, index) => {
            return (
                <tr key={index}>
                    <td>{spGioHang.maSP}</td>
                    <td>{spGioHang.tenSP}x</td>
                    <td>
                        <img src={spGioHang.hinhAnh} alt={spGioHang.tenSP} width={50} height={50}></img>
                    </td>
                    <td>{spGioHang.giaBan.toLocaleString()}</td>
                    <td>
                        <button onClick={() => {
                            thayDoiSoLuong(spGioHang.maSP, 1)
                        }} className="btn btn-primary mr-2">+</button>
                        {spGioHang.soLuong}
                        <button onClick={() => {
                            thayDoiSoLuong(spGioHang.maSP, -1)
                        }} className="btn btn-primary ml-2">-</button>
                    </td>
                    <td>{(spGioHang.giaBan * spGioHang.soLuong).toLocaleString()}</td>
                    <td>
                        <button className="btn btn-danger" onClick={() => {
                            xoaGioHang(spGioHang.maSP)
                        }}>Xóa</button>
                    </td>
                </tr>
            )
        })
    }

  render() {

    let {gioHang} = this.props

    return (
      <div>
        <div className="text-right">
            <span style={{cursor: 'pointer'}}>
            <i className="fa fa-shopping-cart mr-2"></i> Giỏ hàng (0) </span>
        </div>
        <table className="table">
            <thead>
                <tr>
                    <th>Mã sản phẩm</th>
                    <th>Tên sản phẩm</th>
                    <th>Hình ảnh</th>
                    <th>Giá bán</th>
                    <th>Số lượng</th>
                    <th>Thành tiền</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>

                {this.renderGioHang()}

                {/* <tr>
                    <td>1</td>
                    <td>IPhone xs max</td>
                    <td>
                        <img src="https://picsum.photos/200" alt="..." width={50} height={50}></img>
                    </td>
                    <td>1000</td>
                    <td>
                        <button className="btn btn-primary mr-2">+</button>
                        2
                        <button className="btn btn-primary ml-2">-</button>
                    </td>
                    <td>2000</td>
                    <td>
                        <button class="btn btn-danger">Xóa</button>
                    </td>
                </tr> */}
            </tbody>
        </table>
      </div>
    )
  }
}
