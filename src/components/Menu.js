import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Modal from 'react-modal';




// Components

export default class Menu extends Component {

    state = {
        modalThreadState: false
    }

    controlModalThread = () => {
        this.setState({
            modalThreadState: !this.state.modalThreadState
        })
    }

    componentDidMount() {
        Modal.setAppElement('body');
    }
    render() {
        return (
            <div>
                <div className='navForo'>
                    <ul>
                        <li> Wundt </li>
                        <li> <a>Home</a>  </li>
                        <li> <a onClick={this.controlModalThread}>Nuevo Tema </a>  </li>
                        <li><Link to='/logout'>Cerrar Sesión</Link></li>

                    </ul>
                </div>
                <div className='modalNewThread'>
                    <Modal
                        isOpen={this.state.modalThreadState}
                        ariaHideApp={false}
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

