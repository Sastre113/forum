
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
            auth: localStorage.getItem('auth-token')
        }

    }

    componentDidMount() {
        const currentUser = axios.get('/usuarios/me',);
        Promise.all([currentUser]).then(values => {
            this.setState({ usuarioActual: values[0].data })
        })
    }
    render() {
        console.log('Este es el valor de auth: ', this.state.auth)
        if (this.state.auth) {
            return (
                <div>
                    <Router>
                        <div>
                            <Menu usuarioActual={this.state.usuarioActual} />
                            <Switch>
                                <Route path='/forum' component={Hilos} />
                                <Route path='/reply' component={Reply} />
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

