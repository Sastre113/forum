import React, { Component } from 'react';
import Modal from 'react-modal'
import axios from '../axiosConfig';


// Components


export default class Menu extends Component {

    state = {
        modalThreadState: false
    }


    controlModalThread = () => {
        console.log('Hola, pedro', this.state.modalThreadState)
        this.setState({
            modalThreadState: !this.state.modalThreadState
        })
    }

    logout() {
        axios.post('usuarios/logout').then(() => {
            localStorage.removeItem('auth-token');
            window.location.href = '/';
        }).catch((e) => {
            console.log(e);
        });
    }

    render() {
        return (
            <div>
                <div className='navForo'>
                    <li> <a>Home</a>  </li>
                    <li> <a onClick={this.controlModalThread}>Nuevo Tema </a>  </li>
                    <li> <a onClick={this.logout}>Cerrar Sesión</a>  </li>
                </div>
                <div className='modalNewThread'>
                    <Modal
                        isOpen={this.state.modalThreadState}
                    >
                        <div className='btn-closeModal' onClick={this.controlModalThread}>Atras
                             </div>
                        <div className='formNewThread'>
                            <form>
                                <label htmlFor="fname">First name:</label>
                                <input type="text" id="fname" name="fname" value="John" />
                                <label htmlFor="lname">Last name:</label>
                                <input type="text" id="lname" name="lname" value="Doe" />
                                <input type="submit" value="Submit" />
                            </form>
                        </div>

                    </Modal>
                </div>

            </div>


        )
    }
}

