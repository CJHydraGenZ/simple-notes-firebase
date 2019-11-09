import React, { Component } from 'react'
import './Dasboard.css'


class Dasboard extends Component {
    render() {


        return (


            <div className="container">

                <div className="form">
                    <input placeholder='title' type="text" name="" id="title-input" />
                    <textarea placeholder='content' name="" id="text-area"></textarea>
                    <button className="btn-simpan">Simpan</button>
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

export default Dasboard