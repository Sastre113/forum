import React, { Component } from 'react';

// Components
import Menu from './Menu';
import Foro from './Formulario';
import Inicio from './Inicio'
import Post from './Post';




export default class App extends Component {
  render() {
    return (
      <div className='mainClass'>
        <Menu />
        <Inicio />
        
      </div>
    )
  }
}

