
// React

import React, { Component } from 'react';

// Components


// Pruebas

const testReply = [
    {
        _id: '1',
        idAuthor: '1',
        titleReply: 'Primer post',
        bodyReply: 'Pole'
    }, {
        _id: '2',
        idAuthor: '2',
        titleReply: 'Segundo post',
        bodyReply: 'Este es mi segundo post de prueba'
    },
    {
        _id: '3',
        idAuthor: '3',
        titleReply: 'Tercer post',
        bodyReply: 'Este post es de prueba'
    }, {
        _id: '3',
        idAuthor: '3',
        titleReply: 'Tercer post',
        bodyReply: 'Este post es de prueba'
    }, {
        _id: '3',
        idAuthor: '3',
        titleReply: 'Tercer post',
        bodyReply: 'Este post es de prueba'
    }, {
        _id: '3',
        idAuthor: '3',
        titleReply: 'Tercer post',
        bodyReply: 'Este post es de prueba'
    }, {
        _id: '3',
        idAuthor: '3',
        titleReply: 'Tercer post',
        bodyReply: 'Este post es de prueba'
    }, {
        _id: '3',
        idAuthor: '3',
        titleReply: 'Tercer post',
        bodyReply: 'Este post es de prueba'
    }];

const testAuthor = {
    name: 'Pedro',
    title: 'Este es mi titulo de ejemplo',
    body: 'Este es mi body de ejemplo para la prueba sobre el body del cuerpo'
}


export default class Reply extends Component {
    constructor(props) {
        super(props)
        this.state = {
            // idThread: this.props.match.params.id,
            idThread: "5ffca3380d123a4858b67376",
            authorObject: testAuthor,
            replys: testReply

        }
    }



    render() {
        return (
            <div>
                <div className='container-reply'>

                    <div className='main-thread'>
                        <div className='main-thread-authorName'>
                            {this.state.authorObject.name}
                        </div>
                        <div className='main-thread-bodyThread'>
                            <p>{this.state.authorObject.title}</p>
                            <p>{this.state.authorObject.body}</p>
                        </div>
    
                    </div>



                    {
                        this.state.replys.map(reply => {
                            return <div className='container-body-reply' key={reply._id}>
                                <div className='reply-author'>
                                    {reply._id}
                                </div>

                                <div className='reply-body-Thread' >
                                    <div className='initial-route-Thread'>
                                        <p> {reply.titleReply} </p><br />
                                        <p>{reply.bodyReply}</p>

                                    </div>
                                </div>

                            </div>
                        })
                    }
                </div>

            </div>
        )
    }
}
