import React, { Component } from 'react';
import axios from '../axiosConfig'

// Components
import Menu from './Menu';
import Inicio from './Inicio';
import Reply from './Reply';
import Footer from './Footer';




export default class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      usuarioActual: {}
    }
  }

  componentDidMount() {
    const currentUser = axios.get('/usuarios/me',);
    Promise.all([currentUser]).then(values => {
      this.setState({ usuarioActual: values[0].data })
    })
  }

  render() {
    return (
      <div>
        <Menu usuarioActual={this.state.usuarioActual} />
        <Inicio />
        <div>
          <Footer />
        </div>
        
      </div>
    )
  }
}

