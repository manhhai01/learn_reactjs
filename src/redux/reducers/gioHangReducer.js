
const stateDefault = [];

export const gioHangReducer = (state = stateDefault, action) => {
    switch (action.type) {

        case 'THEM_GIO_HANG': {
            let gioHang = state

            // Kiểm tra sản phẩm có trong giỏ hàng hay chưa
            let spKiemTra = gioHang.find(sp => sp.maSP === action.spGH.maSP)

            if(spKiemTra) {
                spKiemTra.soLuong += 1
            } else {
                gioHang.push(action.spGH)
            }

            // immutable: tính bất biến
            // vì là cùng địa chỉ vùng nhớ nên
            // Đối với state object và array phải clone ra object và array mới

            return [...gioHang]
        }

        case 'XOA_GIO_HANG': {
            let gioHang = [...state]

            // loc cac sap khac ma sp click
            gioHang = gioHang.filter(sp => sp.maSP !== action.maSPClick)

            return gioHang
        }

        case 'TANG_GIAM_SO_lUONG': {
            let gioHang = [...state]
            let sp = gioHang.find(sp => sp.maSP === action.maSPClick)
            if(sp) {
                sp.soLuong += action.soLuong
                if(sp.soLuong < 1) {
                    alert('Số lượng không được nhỏ hơn 1.')
                    sp.soLuong -= action.soLuong
                    return gioHang
                }
            }
            return gioHang
        }

        default: return state;
    }
}