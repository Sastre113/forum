
// React

import React, { Component } from 'react';

// Config

import axios from '../axiosConfig';

export default class Logout extends Component {

    state = {
        token: localStorage.getItem('auth-token')
    }

    componentDidMount() {
        axios.post('usuarios/logout').then(() => {
            localStorage.removeItem('auth-token');
            this.setState({token: null});
        }).catch((e) => {
            console.log(e);
        });
    }

    render() {
        return (
          // <> === <React.Fragment>
          <> 
            {
                this.state.token ? null : window.location.href = '/'
            }
          </>
        )
    }
}
