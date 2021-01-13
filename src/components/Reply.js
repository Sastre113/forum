import React, { Component } from 'react';
import Menu from './Menu';
import Footer from './Footer';

export default class Reply extends Component {

    state = {
        
    }

    render() {
        return (
            <div>      
                Hola
                {console.log('Estoy escribiendo en la consola')}
                <Footer />
            </div>
        )
    }
}
