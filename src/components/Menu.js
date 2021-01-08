import React, { Component , useState } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';



// Components
import Formulario from './Formulario';


export default class Menu extends Component {


    render() {
        return (
            <div>
                <Router>
                    <div className='navForo'>
                        <li> <Link to='/home' > Home </Link> </li>
                        <li> <Link to='/newThread'> Nuevo Tema </Link> </li>  
                        <li> <Link to='/logout'> Cerrar Sesión </Link></li>
                    </div>
                    {/* <Route path='/newThread' component={miModal}></Route> */}
                </Router>
            </div>
        )
    }
}

