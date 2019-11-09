import firebase from '../../firebase/index'

export const actionUserName = () => (dispatch) => {
    setTimeout(() => {
        return dispatch({
            type: 'CHANGE_USER',
            value: 'cahya ari wibawa'
        })
    }, 2000)

}



export const registerUserApi = (data) => (dispatch) => {
    return new Promise((resolve, reject) => {

        dispatch({ type: 'CHANGE_LOADING', value: true })
        firebase.auth().createUserWithEmailAndPassword(data.email, data.password).then(res => {
            console.log('secces :', res)
            dispatch({ type: 'CHANGE_LOADING', value: false })
            resolve(true)
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorCode, errorMessage);
            dispatch({ type: 'CHANGE_LOADING', value: false })
            reject(false)
            // ...
        })

    })
}
export const LoginUserApi = (data) => (dispatch) => {

    return new Promise((resolve, reject) => {




        dispatch({ type: 'CHANGE_LOADING', value: true })
        firebase.auth().signInWithEmailAndPassword(data.email, data.password).then(res => {
            // console.log('secces :', res)

            const dataUser = {
                email: res.user.email,
                uid: res.user.uid,
                emailVerified: res.user.emailVerified,
                refreshToken: res.user.refreshToken
            }

            dispatch({ type: 'CHANGE_LOADING', value: false })
            dispatch({ type: 'CHANGE_ISLOGIN', value: true })
            dispatch({ type: 'CHANGE_USER', value: dataUser })
            resolve(dataUser)
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorCode, errorMessage);
            dispatch({ type: 'CHANGE_LOADING', value: false })
            dispatch({ type: 'CHANGE_ISLOGIN', value: false })
            reject(false)
            // ...
        })
    })
}