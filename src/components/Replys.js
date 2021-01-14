
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
            respuestas: [{
                idThread: '0',
                idAuthor: '0',
                titleReply: 'No existen respuestas en este hilo',
                bodyReply: ''
            }],
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

        console.log(`Esto es el tipo ${tipo} y esto es el valor ${valor} `)
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


        if (this.state.respuestas.lenght == 0){
            console.log('Estoy aqui')
            this.setState({
                respuestas: [{
                    idThread: '0',
                    idAuthor: '0',
                    titleReply: 'No existen respuestas en este hilo',
                    bodyReply: ''
                }]
            })
        }
            
    }

    render() {
        return (
            <div>
                <div className='containerHilos' style={{ marginRight: '50px', marginLeft: '50px' }}>
                    {
                        this.state.respuestas.map(respuesta => {
                            return <div className="card" key={respuesta._id} style={{ marginBottom: '10px' }}>
                                <div className="card-header">
                                    {respuesta.titleReply}
                                </div>
                                <div className="card-body">
                                    <p>
                                        {respuesta.bodyReply}
                                    </p>
                                    <p>
                                        Publicado por {this.getPerfil(respuesta.idAuthor).nombre}
                          </p>
                                </div>
                                <div className="card-footer text-muted">
                                    <button onClick={this.controlModalThread} >Nueva respuesta </button>
                                </div>
                            </div>

                        })
                    }
                </div>

                <Modal
                    isOpen={this.state.modalThreadState}
                    ariaHideApp={false}
                    className='modal-new-thread'
                >
                    <form className="new-thread-form" onSubmit={this.onSubmit}>
                        <h2>Nuevo Respuesta</h2>
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
