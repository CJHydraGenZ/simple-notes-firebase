import React, { Component } from 'react'
import './Dasboard.css'
import { addDataToApi } from '../../../config/redux/action/action'
import { connect } from 'react-redux'

class Dasboard extends Component {
    state = {
        title: '',
        content: '',
        date: ''
    }
    handleSaveNote = () => {
        const { title, content } = this.state
        const { savedNotes } = this.props
        const data = {
            title: title,
            content: content,
            date: new Date().getTime(),
            userId: this.props.userData.uid
        }
        savedNotes(data)
        console.log(data);

    }
    oninputChange = (e, type) => {
        this.setState({
            [type]: e.target.value
        })
    }

    render() {
        const { title, content, date } = this.state

        return (


            <div className="container">

                <div className="form">
                    <input placeholder='title' type="text" name="" id="title-input" value={title} onChange={(e) => this.oninputChange(e, 'title')} />
                    <textarea placeholder='content' name="" id="text-area" value={content} onChange={(e) => this.oninputChange(e, 'content')} ></textarea>
                    <button className="btn-simpan" onClick={this.handleSaveNote}>Simpan</button>
                </div>


                <hr />
                <div className="post">
                    <p className="title-post">title</p>
                    <p className="tgl">tanggal 2112</p>
                    <p className="content-post">Content</p>
                </div>

            </div>
        )
    }
}

const reduxState = (state) => ({
    userData: state.user
})

const reduxDispatch = (dispatch) => ({
    savedNotes: (data) => dispatch(addDataToApi(data))
})

export default connect(reduxState, reduxDispatch)(Dasboard)