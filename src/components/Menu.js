import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';


export default class Menu extends Component {

    state = {
        modalThreadState: false,
        newThread: "",
        threadMsg: ""
    }

    controlModalThread = () => {
        this.setState({
            modalThreadState: !this.state.modalThreadState
        })
    }

    // Funcionamiento del metodo
    //     1. Pedir el usuario que esta conectado ahora mismo
    //     2. 


    onSubmit = () => {
        
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
                <div className='nav-Menu'>
                    <ul>
                        <li className='nav-Menu-Logo'>
                            <div className='nav-container-logo'>
                                <img className='img-logo' src="/img/logoWundt256x256.ico" alt="Girl in a jacket" />
                                <div className='overlay-logo-text'>Wundt</div>
                            </div>

                        </li>
                        <div className='nav-menu-btns'>
                            <li> <a>Home</a>  </li>
                            <li> <a onClick={this.controlModalThread}>Nuevo Tema </a>  </li>
                            <li><Link to='/logout'>Cerrar Sesión</Link></li>
                        </div>
                    </ul>
                </div>
                <div className='modal-new-thread'>
                    <Modal
                        isOpen={this.state.modalThreadState}
                        ariaHideApp={false}
                        portalClassName='modal-new-thread'
                    >
                        <form className="new-thread-form" onSubmit={this.onSubmit}>
                            <h2>Nuevo Tema</h2>
                            <p>Rellene todos los campos.</p>
                            <div className="new-thread-title-area">
                                <label htmlFor="titulo" className="form-label">Titulo</label>
                                <input className="form-control input-title-thread" type="text" name="title-thread"
                                    onChange={this.onChange} value={this.state.newTitle}

                                />
                            </div>
                            <div className="new-thread-msg-area">
                                <label htmlFor="body-first-post">Mensaje</label>
                                <textarea className="form-control textarea-body-thread" rows="3" name="body-thread"
                                    onChange={this.onChange} value={this.state.newBody}

                                />
                            </div>

                            <div className='btns-modal-form'>
                                <button className="btn btn-primary btn-modal-send" type="submit" >Enviar</button>
                                <button className="btn btn-primary btn-modal-close" type="button" onClick={this.controlModalThread}>Cerrar</button>
                            </div>

                        </form>

                    </Modal>
                </div>

            </div>


        )
    }
}

