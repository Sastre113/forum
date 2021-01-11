import React, { Component, useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import axios from '../axiosConfig';


// Components
import Formulario from './Modal/Formulario';


export default class Menu extends Component {
    logout() {
        axios.post('usuarios/logout').then(() =>{
            localStorage.removeItem('auth-token');
            window.location.href = '/';
        }).catch((e)=>{
            console.log(e);
        });
    }

    render() {
        return (
            <div>
                <div className='navForo'>
                    <li> <a>Home</a>  </li>
                    <li> <a>Nuevo Tema </a>  </li>
                    <li onClick={this.logout}><a>Cerrar Sesión</a>  </li>
                </div>
            </div>
        )
    }
}

