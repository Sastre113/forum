
// React

import React, { Component } from 'react';
import Modal from 'react-modal';

// Config

import axios from '../axiosConfig'
import '../polyfill.min.js';

// Components


export default class Reply extends Component {
    constructor(props) {
        super(props)

        this.state = {
            modalThreadState: false,
            idThread: this.props.match.params.id,
            usuarioActual: this.props.usuarioActual,
            respuestas: [],
            usuarios: []
        }
    }

    componentDidMount = () => {
        this.recargarReply();
    }

    controlModalThread = (e) => {
        this.setState({
            modalThreadState: !this.state.modalThreadState
        })
    }

    onSubmit = async (e) => {
        e.preventDefault();
        const newRequest = {
            idThread: this.state.idThread,
            idAuthor: this.props.usuarioActual,
            titleReply: this.state.replyTitle,
            bodyReply: this.state.replyMsg
        }
        const res = await axios.post('/respuestas', newRequest);
        this.recargarReply();
        this.controlModalThread();
    }

    onChange = e => {
        const tipo = e.target.name;
        const valor = e.target.value;

        this.setState({
            [tipo]: valor
        })
    }

    getPerfil = (idAuthor) => {
        let auxPerfil = {};
        const usuario = this.state.usuarios.find(usuario => {
            return usuario._id === idAuthor;
        })

        if (usuario) {
            usuario.tipoPrivacidad == 'Anónimo' ?
                auxPerfil = { nombre: usuario.nickname } :
                auxPerfil = { nombre: `${usuario.nombre} ${usuario.apellido}` };
        }


        return auxPerfil;
    }

    recargarReply = () => {
        const replys = axios.get(`/respuestas/${this.state.idThread}`,);
        const users = axios.get('/usuarios/all',);

        Promise.all([replys, users]).then(values => {
            this.setState({
                respuestas: values[0].data,
                usuarios: values[1].data
            })
        })
    }

    render() {
        return (
            <div>
                <div style={{textAlign:'center'}}>
                    <a href="#" className="btn btn-primary btn-lg active mt-5 mb-5"
                        role="button"
                        onClick={this.controlModalThread}
                        aria-pressed="true"
                    >

                        Nueva respuesta
                                    </a>
                </div>

                <div className='container container-Reply'>
                    {
                        this.state.respuestas.length > 0 ? (
                            this.state.respuestas.map(respuesta => {
                                return <div className="row" key={respuesta._id} style={{ marginBottom: '10px' }}>
                                    <div className='col col-lg-12'>
                                        <div className="titleReply">
                                            {respuesta.titleReply}
                                            <p className='whoReply'>
                                                Publicado por {this.getPerfil(respuesta.idAuthor).nombre}
                                            </p>
                                        </div>
                                        <div className="bodyReply">
                                            <p className='p-BodyReply'>
                                                {respuesta.bodyReply}
                                            </p>
                                        </div>
                                    </div>
                                </div>


                            })
                        )
                            : (
                                <div className='justify-content-md-center'>
                                    <div className='col-md-2 container-noMsg'>
                                        <div className="alert alert-primary" role="alert">
                                            No hay mensajes.
                                    </div>
                                    </div>
                                </div>
                            )
                    }
                </div>

                <Modal
                    isOpen={this.state.modalThreadState}
                    ariaHideApp={false}
                    className='modal-new-thread'
                >
                    <form className="new-thread-form" onSubmit={this.onSubmit}>
                        <h2>Nueva Respuesta</h2>
                        <p>Rellene todos los campos.</p>
                        <div className="new-thread-title-area">
                            <label htmlFor="titulo" className="form-label">Titulo</label>
                            <input className="form-control input-title-thread" type="text"
                                name="replyTitle"
                                onChange={this.onChange}
                                value={this.state.replyTitle}
                            />
                        </div>
                        <div className="new-thread-msg-area">
                            <label htmlFor="body-first-post">Mensaje</label>
                            <textarea className="form-control textarea-body-thread" rows="3"
                                name="replyMsg"
                                onChange={this.onChange}
                                value={this.state.replyMsg}

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
