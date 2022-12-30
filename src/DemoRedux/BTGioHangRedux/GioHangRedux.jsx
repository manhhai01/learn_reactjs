import React, { Component } from 'react'
// ket noi redux
import { connect } from 'react-redux'

class GioHangRedux extends Component {

    tinhTongGioHang = () => {
        // let tongSL = 0;
        // for(let spGH of this.props.stateGioHang) {
        //     tongSL += spGH.soLuong
        // }

        let tongSL = this.props.stateGioHang.reduce((soLuong, spGH) => {
            return soLuong += spGH.soLuong
        }, 0)

        return tongSL
    }

    tinhTongTien = () => {
        let tongTien = this.props.stateGioHang.reduce((tongTien, spGH) => {
            return tongTien += spGH.soLuong * spGH.giaBan
        }, 0)

        return tongTien
    }

    render() {
        console.log(this.props)
        return (
            <div>
                <div className="text-right">
                    <span className="text-danger font-weight-bold">Giỏ hàng ({this.tinhTongGioHang()})</span><br />
                    <span className="text-danger font-weight-bold">Tổng tiền:  {this.tinhTongTien().toLocaleString()} VNĐ</span>
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
                        {this.props.stateGioHang.map((spGH, index) => {
                            return (
                                <tr key={index}>
                                    <td>{spGH.maSP}</td>
                                    <td>{spGH.tenSP}</td>
                                    <td><img src={spGH.hinhAnh} alt="..." width={60} height={60} /></td>
                                    <td>{spGH.giaBan.toLocaleString()}</td>
                                    <td>
                                        <button className="btn btn-primary mr-2" onClick={() => {
                                            this.props.tangGiamSoLuong(spGH.maSP, -1)
                                        }}>-</button>
                                        {spGH.soLuong}
                                        <button className="btn btn-primary ml-2" onClick={() => {
                                            this.props.tangGiamSoLuong(spGH.maSP, 1)
                                        }}>+</button>
                                    </td>
                                    <td>{(spGH.giaBan * spGH.soLuong).toLocaleString()}</td>
                                    <td>
                                        <button className="btn btn-danger" onClick={() => {
                                            this.props.xoaGioHang(spGH.maSP)
                                        }}>Xóa</button>
                                    </td>
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div>
        )
    }
}

// dinh nghia ham mapStateToProps de lay du lieu redux ve
const mapStateToProps = (rootReducer) => {

    return {
        stateGioHang: rootReducer.gioHangReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        xoaGioHang: (maSPClick) => {
            const action = {
                type: 'XOA_GIO_HANG',
                maSPClick
            }
            dispatch(action)
        },
        tangGiamSoLuong: (maSPClick, soLuong) => {
            const action = {
                type: 'TANG_GIAM_SO_lUONG',
                maSPClick,
                soLuong
            }
            dispatch(action)
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(GioHangRedux);
