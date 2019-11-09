import React, { Component } from 'react'
import './Register.css'
import Button from '../../../component/atoms/Button/Button'
import { connect } from 'react-redux'
import { registerUserApi } from '../../../config/redux/action/action'


class Register extends Component {
    state = {
        email: '',
        password: '',

    }

    handleChangeText = (data) => {
        // console.log(data.target.id);
        this.setState({
            [data.target.id]: data.target.value,
            // password: data.target.value
        })

    }

    handleRegisterSubmit = async () => {
        const { email, password } = this.state


        const res = await this.props.registerAPI({ email, password }).catch(err => err)
        if (res === true) {

            this.setState({
                email: '',
                password: ''
            })
        }


    }



    render() {
        return (
            <div className="auth-container">
                <div className="auth-card">

                    <p className="auth-title">Register Page</p>
                    <input className="input" id="email" type="text" placeholder="Email" onChange={this.handleChangeText} value={this.state.email} />
                    <input className="input" id="password" type="password" placeholder="Password" onChange={this.handleChangeText} value={this.state.password} />
                    <Button onClick={this.handleRegisterSubmit} title="Register" loading={this.props.isLoading} />

                </div>
            </div>
        )
    }
}

const reduxState = (state) => ({
    isLoading: state.isLoading
})

const reduxDispatch = (dispatch) => ({
    registerAPI: (data) => dispatch(registerUserApi(data))
})

export default connect(reduxState, reduxDispatch)(Register) 