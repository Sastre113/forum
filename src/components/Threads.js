
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

            <div className='containerHilos' style={{marginRight: '50px',marginLeft: '50px'}}>
                {
                    this.props.hilos.map(hilo => {
                        return <div className="card" key={hilo._id} style={{marginBottom: '10px'}}>
                        <div className="card-header">
                          <h3>{hilo.titleThread}</h3>
                        </div>
                        <div className="card-body">
                          <p>
                              {hilo.bodyThread}
                          </p>
                          <p>
                              Publicado por {this.getPerfil(hilo.idAuthor).nombre}.
                          </p>
                        </div>
                        <div className="card-footer text-muted">
                          <Link to={`/forum/${hilo._id}`}>
                              Acceder al tema de discusión.
                          </Link>
                        </div>
                      </div>
                      
                    })
                }
            </div>
        )
    }
}
