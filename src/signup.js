import axios from './axiosConfig';
import './polyfill.min.js'

const createForm = document.querySelector('#user-form-create')
createForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const usuario =
    {   
        
        "nickname": e.target.elements.alias.value,
        "nombre": e.target.elements.nombre.value,
        "apellido": e.target.elements.apellidos.value,
        "fechaNacimiento": e.target.elements.fechaNaci.value,
        "email": e.target.elements.email.value,
        "password": e.target.elements.password.value,
        // Familiar o Paciente/Enfermo
        "tipoCuenta": e.target.elements.tipoCuenta.value,
        // Anonimo Si o No
        "tipoPrivacidad": e.target.elements.tipoPrivacidad.value,
    }

    try {
        const resultado = await axios.post('/usuarios', usuario)
        console.log(resultado)
        window.location.href = '/';
    } catch (error) {
        console.log(error)
    }
})
