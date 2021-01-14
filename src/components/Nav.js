
// React

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';

// Config

import axios from '../axiosConfig'
import '../polyfill.min.js';

// Components


export default class Menu extends Component {

    constructor(props) {
        super(props)
        this.state = {
            modalThreadState: false,
            threadTitle: "",
            threadMsg: "",
            threadDisease: ""
        }
    }

    controlModalThread = () => {
        this.setState({
            modalThreadState: !this.state.modalThreadState
        })
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const newRequest = {
            idAuthor: this.props.usuarioActual._id,
            disease: this.state.threadDisease,
            titleThread: this.state.threadTitle,
            bodyThread: this.state.threadMsg
        }

        const res = await axios.post('/hilos', newRequest);
        this.props.recargarHilos();
        this.controlModalThread();
    }

    onChange = e => {
        const tipo = e.target.name;
        const valor = e.target.value;

        this.setState({
            [tipo]: valor
        })
    }

    componentDidMount() {
        Modal.setAppElement('body');
    }

    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                    <a className="navbar-brand">
                            <img className='img-logo' src="/img/logoWundt256x256.ico" alt="logoWundt"  />
                    </a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item active">
                                <Link to='/forum' className="nav-link">Home</Link>
                            </li>
                            <li className="nav-item active">
                                <a className="nav-link" onClick={this.controlModalThread}>Nuevo tema</a>
                            </li>
                            <li className="nav-item active" >
                                <Link to='/logout' className="nav-link"  >Cerrar Sesión</Link>
                            </li>
                        </ul>
                    </div>
                </nav>


                <Modal
                    isOpen={this.state.modalThreadState}
                    ariaHideApp={false}
                    className='modal-new-thread'
                >
                    <form className="new-thread-form" onSubmit={this.onSubmit}>
                        <h2>Nuevo Tema</h2>
                        <p>Rellene todos los campos.</p>
                        <div className="new-thread-title-area">
                            <label htmlFor="titulo" className="form-label">Titulo</label>
                            <input className="form-control input-title-thread" type="text"
                                name="threadTitle"
                                onChange={this.onChange}
                                value={this.state.threadTitle}
                            />
                        </div>
                        <div className="new-thread-disease-area">
                            <label htmlFor="disease">Enfermedad</label>
                            <select className="form-control"
                                name='threadDisease'
                                onChange={this.onChange}
                                value={this.state.disease}>
                                {/* feat: Hacer una BD con las enfermedades
                                    y descargarlas aqui */}
                                <option></option>
                                <option value='Enfermedad 1'>Enfermedad 1</option>
                                <option value='Enfermedad 2'>Enfermedad 2</option>
                                <option value='Enfermedad 3'>Enfermedad 3</option>
                                <option value='Enfermedad 4'>Enfermedad 4</option>
                                <option value='Enfermedad 5'>Enfermedad 5</option>
                            </select>
                        </div>
                        <div className="new-thread-msg-area">
                            <label htmlFor="body-first-post">Mensaje</label>
                            <textarea className="form-control textarea-body-thread" rows="3"
                                name="threadMsg"
                                onChange={this.onChange}
                                value={this.state.threadMsg}

                            />
                        </div>

                        <div className='btns-modal-form'>
                            <button className="btn btn-primary btn-modal-send" type="submit" >Enviar</button>
                            <button className="btn btn-primary btn-modal-close" type="button" onClick={this.controlModalThread}>Cerrar</button>
                        </div>

                    </form>

                </Modal>

            </div>


        )
    }
}

