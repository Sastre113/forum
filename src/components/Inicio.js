import React, { Component } from 'react';
import axios from '../axiosConfig';

import Post from './Post';


export default class Inicio extends Component {

    constructor(props) {
        super(props)
        this.state = {
            usuarios: [{}],
            hilos: [{}]
        }
    }

    componentDidMount() {
        const threads = axios.get('http://localhost:3001/api/hilos',);
        const users = axios.get('http://localhost:3001/api/usuarios/all',);

        Promise.all([threads, users]).then(values => {
            this.setState({ hilos: values[0].data, usuarios: values[1].data })
        })
    }

    /*
     *   El método recibe el idAuthor
     *     y devuelve el nombre o nickname del usuario
     *  
     */

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

    render() {
        return (

            <div className='containerInicio'>
                {
                    // Aqui es donde deberíamos
                    //  controlar que hilos ve el usuario
                    this.state.hilos.map(hilo => {
                        return <div className='initial-thread' key={hilo.idThread}>
                            <div className='initial-author-Thread'>
                                {
                                    this.getPerfil(hilo.idAuthor).nombre
                                }
                            </div>
                            <div className='initial-body-Thread'>
                                <div className='initial-route-Thread'>
                                    <a className='initial-title-Thread' >
                                        {hilo.titleThread}
                                    </a><br />
                                    <span className='initial-body-post'>
                                        {hilo.bodyThread}
                                    </span>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        )
    }
}
