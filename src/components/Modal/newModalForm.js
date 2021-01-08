import React from 'react'

export default function e() {
    return (
        <div>
            {/* Formulario MODAL */}
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
}
