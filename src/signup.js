import axios from 'axios';
const createForm = document.querySelector('#user-form-create')
createForm.addEventListener('submit', async (e) => {
    e.preventDefault()

    const usuario =
    {   
        // Hay que agregar nickname
        "nickname": e.target.elements.alias.value,
        "nombre": e.target.elements.nombre.value,
        "apellido": e.target.elements.apellidos.value,
        "fechaNacimiento": e.target.elements.fechaNaci.value,
        "email": e.target.elements.email.value,
        // Minimo 6 caracteres alfanumericos
        "password": e.target.elements.password.value,
        // Anonimo Si o No
        "tipoCuenta": e.target.elements.tipoCuenta.value,
        // Familiar o Paciente/Enfermo
        "tipoPrivacidad": e.target.elements.tipoPrivacidad.value,
    }

    try {

        const resultado = await axios.post('/api/usuarios', usuario)

        console.log(resultado)

    } catch (error) {
        console.log(error)
    }
})
