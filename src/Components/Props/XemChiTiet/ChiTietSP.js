import React, { Component } from 'react'

export default class ChiTietSP extends Component {
    render() {
        let {maSP, tenSP, manHinh, heDieuHanh, cameraTruoc, cameraSau,
            ram, rom, giaBan, hinhAnh} = this.props.spChiTiet
        return (
            <div className="row">
                <div className="col-4">
                    <h3 className="text-center">{tenSP}</h3>
                    <img src={hinhAnh} alt={tenSP} height={350} className="w-100"></img>
                </div>
                <div className="col-8">
                    <h3 className="text-center">Thống số kỹ thuật</h3>
                    <table className="table">
                        <tbody>
                            <tr>
                                <td>Màn hình</td>
                                <td>{manHinh}</td>
                            </tr>
                            <tr>
                                <td>Hệ điều hành</td>
                                <td>{heDieuHanh}</td>
                            </tr>
                            <tr>
                                <td>Camera trước</td>
                                <td>{cameraTruoc}</td>
                            </tr>
                            <tr>
                                <td>Camera sau</td>
                                <td>{cameraSau}</td>
                            </tr>
                            <tr>
                                <td>RAM</td>
                                <td>{ram}</td>
                            </tr>
                            <tr>
                                <td>ROM</td>
                                <td>{rom}</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        )
    }
}
