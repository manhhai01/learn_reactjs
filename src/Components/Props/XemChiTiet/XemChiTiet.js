import React, { Component } from 'react'
import SanPham from './SanPham'
import ChiTietSP from './ChiTietSP'

export default class XemChiTiet extends Component {

    phones = [
        { "maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./images/phones/vsphone.jpg" },
        { "maSP": 2, "tenSP": "Meizu 16Xs", "manHinh": "AMOLED, FHD+ 2232 x 1080 pixels", "heDieuHanh": "Android 9.0 (Pie); Flyme", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 7600000, "hinhAnh": "./images/phones/meizuphone.jpg" },
        { "maSP": 3, "tenSP": "Iphone XS Max", "manHinh": "OLED, 6.5, 1242 x 2688 Pixels", "heDieuHanh": "iOS 12", "cameraSau": "Chính 12 MP & Phụ 12 MP", "cameraTruoc": "7 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 27000000, "hinhAnh": "./images/phones/applephone.jpg" }
    ]

    state = {
        spChiTiet: {"maSP": 1, "tenSP": "VinSmart Live", "manHinh": "AMOLED, 6.2, Full HD+", "heDieuHanh": "Android 9.0 (Pie)", "cameraTruoc": "20 MP", "cameraSau": "Chính 48 MP & Phụ 8 MP, 5 MP", "ram": "4 GB", "rom": "64 GB", "giaBan": 5700000, "hinhAnh": "./images/phones/vsphone.jpg" }
    }

    renderProductCard = () => {
        return this.phones.map((product, index) => {
            return <div className="col-4" key={index}>
                <SanPham product={product} xemChiTiet={this.xemChiTiet}/>
            </div>
        })
    }

    xemChiTiet = (sanPhamClick) => {
        console.log("Sản phẩm clicked: ", sanPhamClick)
        this.setState({
            spChiTiet: sanPhamClick
        })
    }

    render() {

        return (
            <div className="container">
                <h3 className="text-center">Danh sách sản phẩm</h3>
                <div className="row">
                    {this.renderProductCard()}
                </div>

                <ChiTietSP spChiTiet={this.state.spChiTiet} />
            </div>
        )
    }
}
