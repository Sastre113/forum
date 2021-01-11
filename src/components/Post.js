import React, { Component } from 'react';


export default class Post extends Component {

    state = {
        posts: []
    }

    render() {
        return (
            <div>          
                <span className='titlePost'> <h1> Post's</h1> </span>
                <div className='allPost'>
                {
                    this.state.posts.map( post =>{
                        return <div key={post.id}>
                            <h2>{post.title}</h2>
                            <p>{post.body}</p>
                        </div>
                    })
                }
                </div>
                
            </div>
        )
    }
}
