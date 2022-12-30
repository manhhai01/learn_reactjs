
const stateDefault = 1;


export const stateNumber = (state = stateDefault, action) => {
    switch(action.type) {
        case 'TANG_GIAM_SO_LUONG': {
            return state += action.soLuong
        }

        default: return state
    }
    return state
}