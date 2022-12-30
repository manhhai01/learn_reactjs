import React, { Component } from 'react'

//Ket noi redux
import {connect} from 'react-redux'

 class TangGiamSoLuong extends Component {
  render() {

    console.log(this.props)
    return (
      <div className="container">
        <h3>{this.props.number}</h3>
        <button onClick={() => {
            this.props.tangGiamSoLuong(1)
        }}>+</button>
        <button onClick={() => {
            this.props.tangGiamSoLuong(-1)
        }}>-</button>
      </div>
    )
  }
}

// Lấy dữ liệu từ redux về
const mapStateToProps = (rootReducer) => {
    return { // tạo ra các props cho component là giá trị
        number: rootReducer.stateNumber
    }
}

// Định nghĩa một hàm maoDispatchToProps => Nhiệm vụ tạo ra các props cho component là hàm
const mapDispatchToProps = (dispatch) => {
    return {
      tangGiamSoLuong: (soLuong) => {
        // console.log(soLuong);
        // để gửi dữ liệu lên redux (tạo một object gọi là action)

        const action = {
          type: 'TANG_GIAM_SO_LUONG', // redux bắt buộc phải có
          soLuong: soLuong,
        }

        // Đưa dữ liệu lên redux
        dispatch(action); // giống hàm setState() mà redux trả ra cho mình
      }
    }
}



// Cú pháp kết nối giữa react component với redux
export default connect(mapStateToProps, mapDispatchToProps)(TangGiamSoLuong)

