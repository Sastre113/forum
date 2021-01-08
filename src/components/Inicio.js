import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

import Post from './Post';

let textoLargo = "Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo Este post es muy largo ";
let miVariable = 0;

export default class Inicio extends Component {

    // state = {
    //     temas: [
    //         {
    //             autor: '1º Paciente',
    //             tema: 'Ezquizofrenía',
    //             post: 'Lorem que te lorem sus'
    //         },
    //         {
    //             autor: '2º Paciente',
    //             tema: 'Paranoia',
    //             post: textoLargo
    //         },
    //         {
    //             autor: '3º Paciente',
    //             tema: 'Dislexia',
    //             post: 'Aqui va como inicia el post'
    //         }
    //     ]
    // }
    
constructor(props){
    super(props)
    this.state = {
        temas: [
            {
                autor: '1º Paciente',
                tema: 'Ezquizofrenía',
                post: 'Lorem que te lorem sus'
            },
            {
                autor: '2º Paciente',
                tema: 'Paranoia',
                post: textoLargo
            },
            {
                autor: '3º Paciente',
                tema: 'Dislexia',
                post: 'Aqui va como inicia el post'
            }
        ]
    }
}

    // async componentDidMount() {
    //     const res = await fetch('https://jsonplaceholder.typicode.com/comments');
    //     let data = await res.json();

    //     //this.setState({ temas: data })
    // }

    render() {
        return (
            <div className='containerInicio'>
                {
                    this.state.temas.map(tema => {
                        return <div className='thread'>
                                <div className='authorThread'>
                                    {tema.autor} {/* Esto hace de autor del tema */}
                                </div>
                                <div className='bodyThread'>
                                    <Router>
                                        <Link><h1 className='titleThread'>{tema.tema}</h1> </Link>{/* Esto hace de titulo del tema */} 
                                        <Route path='/post' component={Post}> </Route>
                                    </Router>
                                               
                                    <span className='initialPost'> {tema.post} </span>
                                </div>
                                {console.log(miVariable++)}
                            </div>             
                    })
                }
            </div>
        )
    }
}
