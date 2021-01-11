import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from 'axios';

import Post from './Post';

const urlAPI = 'http://localhost:3001/api/hilos';
let textoLargo = "Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo ";


export default class Inicio extends Component {

    constructor(props) {
        super(props)
        this.state = {
            hilos: [
                {
                    idThread: '1',
                    autor: '1º Paciente',
                    hilo: 'Ezquizofrenía',
                    post: 'Lorem que te lorem sus'
                },
                {
                    idThread: '2',
                    autor: '2º Paciente',
                    hilo: 'Paranoia',
                    post: textoLargo
                },
                {
                    idThread: '3',
                    autor: '3º Paciente',
                    hilo: 'Dislexia',
                    post: 'Aqui va como inicia el post'
                }
            ]
        }
    }

    componentDidMount() {
        const res = axios.get(urlAPI,); 
        res.then((array) =>{
            this.setState({ hilos: array.data })
        })  
    }

    render() {
        return (
            
            <div className='containerInicio'>
                {
                    this.state.hilos.map(hilo => {
                        return <div className='thread' key={hilo.idThread}>
                            <div className='authorThread'>
                                {hilo.idAuthor} {/* Esto hace de autor del hilo */}
                            </div>
                            <div className='bodyThread'>
                                <h1 className='titleThread'>{hilo.titleThread}</h1> {/* Esto hace de titulo del hilo */}
                                <span className='initialPost'> {hilo.bodyThread} </span>
                            </div>
                            
                        </div>
                    })
                }
            </div>
        )
    }
}
