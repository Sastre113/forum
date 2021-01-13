
// React

import React, { Component } from 'react';
import { Link } from 'react-router-dom';

// Config

import axios from '../axiosConfig';

// Components

export default class Hilos extends Component {

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.recargarHilos()
    }

    /*
     *   El método recibe el idAuthor
     *     y devuelve el nombre o nickname del usuario
     *  
     */

    getPerfil = (idAuthor) => {
        let auxPerfil = {};
        const usuario = this.props.usuarios.find(usuario => {
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

            <div className='containerHilos'>
                {
                    this.props.hilos.map(hilo => {
                        return <div className='initial-thread' key={hilo._id}>
                            <div className='initial-author-Thread'>
                                {
                                    this.getPerfil(hilo.idAuthor).nombre
                                }
                            </div>

                            <div className='initial-body-Thread' >
                                <Link to={`/forum/${hilo._id}`}>
                                    <div className='initial-route-Thread'>
                                        <p className='initial-title-Thread' >
                                            {hilo.titleThread}
                                        </p><br />
                                        <span className='initial-body-post'>
                                            {hilo.bodyThread}
                                        </span>
                                    </div>
                                </Link>

                            </div>

                        </div>
                    })
                }
            </div>
        )
    }
}
