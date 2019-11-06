

const initialState = {
    popup: false,
    isLogin: false,
    user: 'cahya',
    isLoading: false
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
    if (action.type === 'CHANGE_USER') {
        return {
            ...state,
            user: action.value
        }
    }
    if (action.type === 'CHANGE_LOADING') {
        return {
            ...state,
            isLoading: action.value
        }
    }

    return state
}

export default reduser