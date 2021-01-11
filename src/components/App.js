import React, { Component } from 'react';

// Components
import Menu from './Menu';
import Inicio from './Inicio';
import Footer from './Footer';
import Post from './Post';




export default class App extends Component {
  render() {
    return (
      <div>
        <Menu />
        <Inicio />
        <Footer />
      </div>
    )
  }
}

