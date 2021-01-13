
// React

import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

// Config

import axios from '../axiosConfig';

// Components

import Nav from './Nav';
import Logout from './Logout';
import Threads from './Threads';
import Replys from './Replys';
import Footer from './Footer';



export default class Main extends Component {

    constructor(props) {
        super(props)
        this.state = {
            usuarioActual: {},
            auth: localStorage.getItem('auth-token'),
            idThreadSelect: '',
            usuarios: [],
            hilos: []
        }
    }

    setIdThreadSelect = (idThread) => {
        this.setState({
            idThreadSelect: idThread
        })
    }

    recargarHilos = () => {
        const threads = axios.get('/hilos',);
        const users = axios.get('/usuarios/all',);

        Promise.all([threads, users]).then(values => {
            this.setState({
                hilos: values[0].data,
                usuarios: values[1].data
            })
        })
    }


    componentDidMount() {
        const currentUser = axios.get('/usuarios/me',);
        Promise.all([currentUser]).then(values => {
            this.setState({ usuarioActual: values[0].data })
        })
    }
    render() {
        if (this.state.auth) {
            return (
                <div>
                    <Router>
                        <div>
                            <Nav 
                                recargarHilos={this.recargarHilos} 
                                usuarioActual={this.state.usuarioActual} 
                            />
                            <Switch>
                                <Route path='/forum/:id' component={Replys} />
                                <Route 
                                    path='/forum'
                                    render={ () =>
                                        <Threads
                                            usuarios={this.state.usuarios}
                                            hilos={this.state.hilos}
                                            recargarHilos={this.recargarHilos}
                                        />
                                    }
                                />
                                <Route path='/logout' component={Logout} />
                            </Switch>
                            <Footer />
                        </div>
                    </Router>
                </div>
            )
        } else {
            return <div>{window.location.href = '/'}</div>
        }

    }
}

