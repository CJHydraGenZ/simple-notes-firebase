

const initialState = {
    popup: false,
    isLogin: false
}
const reduser = (state = initialState, action) => {

    if (action.type === 'CHANGE_POPUP') {
        return {
            ...state,
            popup: action.value
        }
    }
    if (action.type === 'CHANGE_ISLOGIN') {
        return {
            ...state,
            popup: action.value
        }
    }

    return state
}

export default reduser