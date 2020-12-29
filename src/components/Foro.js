import React, { Component } from 'react'



/*  */
export default class Foro extends Component {

    state = {
        show: true
    }

    mostrarOcultar = () => {
        this.setState({show: !this.state.show})
    }

    render() {

        if(this.state.show){
            return (
                <div>  
                    <button onClick={this.mostrarOcultar} > Nuevo tema </button>
                    <div>
                        <form onSubmit={this.onSubmit}>
                            <input name='title' type='text'
                                placeholder='Nuevo tema'
                            />
    
                            <br />
    
                            <textarea name='description'
                                placeholder='Escribé tu post...'
                            />
                            <input type="submit" />
                        </form>
                    </div>
    
                </div>
            )
        } else {
            return (
                <div>  
                    <button onClick={this.mostrarOcultar} > Nuevo tema </button>
                </div>
            )
        }
        
    }
}
