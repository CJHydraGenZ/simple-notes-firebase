import React, { Component } from 'react'

import firebase from '../../../config/firebase'

class Register extends Component {
    state = {
        email: '',
        password: ''
    }

    handleChangeText = (data) => {
        // console.log(data.target.id);
        this.setState({
            [data.target.id]: data.target.value,
            // password: data.target.value
        })

    }

    handleRegisterSubmit = () => {
        const { email, password } = this.state
        console.log('data sebelum di kirim', email, password);

        firebase.auth().createUserWithEmailAndPassword(email, password).then(res => {
            console.log('secces :', res)

        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;

            console.log(errorCode, errorMessage);

            // ...
        });



    }

    render() {
        return (
            <div className="auth-container">
                <div className="auth-card">

                    <p className="auth-title">Register Page</p>
                    <input className="input" id="email" type="text" placeholder="Email" onChange={this.handleChangeText} />
                    <input className="input" id="password" type="password" placeholder="Paswword" onChange={this.handleChangeText} />
                    <button className="btn-register" onClick={this.handleRegisterSubmit}>Register</button>
                    {/* <button>Go to Dasbord</button> */}
                </div>
            </div>
        )
    }
}

export default Register