import React, { Component, Fragment } from 'react'
import './Dasboard.css'
import { addDataToApi, getDataFromApi, updateDataApi } from '../../../config/redux/action/action'
import { connect } from 'react-redux'

class Dasboard extends Component {
	state = {
		title: '',
		content: '',
		date: '',
		textButton: 'SIMPAN',
		noteId: ''
	}

	componentDidMount() {
		const userData = JSON.parse(localStorage.getItem('userData'))
		this.props.getNotes(userData.uid)
	}


	handleSaveNote = () => {
		const { title, content, textButton, noteId } = this.state
		const { savedNotes, updateNotes } = this.props
		const userData = JSON.parse(localStorage.getItem('userData'))

		const data = {
			title: title,
			content: content,
			date: new Date().getTime(),
			userId: userData.uid
		}
		console.log(data);
		if (textButton === 'SIMPAN') {
			savedNotes(data)

		} else {
			data.noteId = noteId
			updateNotes(data)
		}

	}
	oninputChange = (e, type) => {
		this.setState({
			[type]: e.target.value
		})
	}

	updateNotes = (note) => {
		console.log(note);
		this.setState({
			title: note.data.title,
			content: note.data.content,
			textButton: 'UPDATE',
			noteId: note.id
		})

	}

	cencelUpdate = () => {
		this.setState({
			title: '',
			content: '',
			textButton: 'SIMPAN'
		})
	}
	render() {
		// console.log(this);

		const { title, content, textButton } = this.state
		const { notes } = this.props
		const { updateNotes, cencelUpdate } = this
		console.log('Notes: ', notes);

		return (


			<div className="container">

				<div className="form">
					<input placeholder='title' type="text" name="" id="title-input" value={title} onChange={(e) => this.oninputChange(e, 'title')} />
					<textarea placeholder='content' name="" id="text-area" value={content} onChange={(e) => this.oninputChange(e, 'content')} ></textarea>
					<div className="action-wrapper">
						{
							textButton === "UPDATE" ? (

								<button className="btn-cencel" onClick={this.handleSaveNote} onClick={cencelUpdate}>cencel</button>
							) : null
						}
						<button className="btn-simpan" onClick={this.handleSaveNote}>{textButton}</button>
					</div>
				</div>


				<hr />
				{
					notes.length > 0 ? (
						<Fragment>
							{
								notes.map(note => {
									return (

										<div className="post" key={note.id} onClick={() => updateNotes(note)}>
											<p className="title-post">{note.data.title}</p>
											<p className="tgl">{note.data.date}</p>
											<p className="content-post">{note.data.content}</p>
										</div>
									)
								})
							}
						</Fragment>
					) : null
				}

			</div>
		)
	}
}

const reduxState = (state) => ({
	userData: state.user,
	notes: state.notes,

})

const reduxDispatch = (dispatch) => ({
	savedNotes: (data) => dispatch(addDataToApi(data)),
	getNotes: (data) => dispatch(getDataFromApi(data)),
	updateNotes: (data) => dispatch(updateDataApi(data))
})

export default connect(reduxState, reduxDispatch)(Dasboard)