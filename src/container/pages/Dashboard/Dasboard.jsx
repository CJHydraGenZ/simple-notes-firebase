import React, { Component, Fragment } from 'react'
import './Dasboard.css'
import { addDataToApi, getDataFromApi, updateDataApi, deleteDataApi } from '../../../config/redux/action/action'
import { connect } from 'react-redux'
import swal from '@sweetalert/with-react'

class Dasboard extends Component {
	state = {
		title: '',
		content: '',
		date: '',
		textButton: 'SIMPAN',
		noteId: '',
		hapus: false
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
			swal("Good job!", "You clicked the button!", "success").then(savedNotes(data))


		} else {
			data.noteId = noteId
			swal("Good job!", "You clicked the button!", "success").then(updateNotes(data))

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

	deleteNote = (e, note) => {
		e.stopPropagation()
		const { deleteNote } = this.props

		console.log(this.state);

		const userData = JSON.parse(localStorage.getItem('userData'))
		const data = {

			userId: userData.uid,
			noteId: note.id
		}
		swal({
			title: "Are you sure?",
			text: "Once deleted, you will not be able to recover this imaginary file!",
			icon: "warning",
			buttons: true,
			dangerMode: true,
		})
			.then(hapus => {
				if (hapus) {
					deleteNote(data)
					swal("Poof! Your imaginary file has been deleted!", {
						icon: "success",
					});
				} else {
					swal("Your imaginary file is safe!");

				}
			});


	}
	render() {
		// console.log(this);

		const { title, content, textButton } = this.state
		const { notes } = this.props
		const { updateNotes, cencelUpdate, deleteNote } = this
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
											<div className="delete-btn" onClick={(e) => deleteNote(e, note)}>X</div>
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
	updateNotes: (data) => dispatch(updateDataApi(data)),
	deleteNote: (data) => dispatch(deleteDataApi(data))
})

export default connect(reduxState, reduxDispatch)(Dasboard)