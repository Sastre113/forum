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
        
        Promise.all([threads,users]).then( values =>{
            console.log(values)
            this.setState({hilos: values[0].data, usuarios: values[1].data})
        })
    }


    dameNombre = (idAuthor) => {
        let auxNombre = "";
        const usuario = this.state.usuarios.find(usuario => {
            return usuario._id === idAuthor;
        })
        
        if(usuario)
            auxNombre = usuario.nombre;
        
        return auxNombre
    }


    render() {
        return (

            <div className='containerInicio'>
                {console.log(this.state.hilos)}
                {   
                
                    this.state.hilos.map(hilo => {
                        return <div className='thread' key={hilo.idThread}>
                            <div className='authorThread'>
                                {
                                    this.dameNombre(hilo.idAuthor)
                                } {/* Esto hace de autor del hilo */}
                            </div>
                            <div className='bodyThread'>
                                <h1 className='titleThread'>
                                    {hilo.titleThread}
                                </h1>
                                <span className='initialPost'>
                                    {hilo.bodyThread}
                                </span>
                            </div>
                        </div>
                    })
                }
            </div>
        )
    }
}
