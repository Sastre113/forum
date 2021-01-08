import React, { Component } from 'react'


/*  */
export default class Formulario extends Component {

    render() {
        return (
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
        )
    }
}
