import React, { Component } from 'react'
import { connect } from 'react-redux'
import { LoginUserApi } from '../../../config/redux/action/action'
import Button from '../../../component/atoms/Button/Button'


class Login extends Component {

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

    handleLoginSubmit = async () => {
        const { email, password } = this.state

        const { history } = this.props


        const res = await this.props.loginAPI({ email, password }).catch(err => err)
        if (res) {
            console.log('login secsesss', res);

            this.setState({
                email: '',
                password: ''
            })
            history.push('/')
        } else {
            console.log('login gagal');

        }


    }

    render() {
        return (
            <div className="auth-container">
                <div className="auth-card">

                    <p className="auth-title">Login Page</p>
                    <input className="input" id="email" type="text" placeholder="Email" onChange={this.handleChangeText} value={this.state.email} />
                    <input className="input" id="password" type="password" placeholder="Password" onChange={this.handleChangeText} value={this.state.password} />
                    <Button onClick={this.handleLoginSubmit} title="Login" loading={this.props.isLoading} />

                </div>
            </div>
        )
    }
}



const reduxState = (state) => ({
    isLoading: state.isLoading
})

const reduxDispatch = (dispatch) => ({
    loginAPI: (data) => dispatch(LoginUserApi(data))
})


export default connect(reduxState, reduxDispatch)(Login) 