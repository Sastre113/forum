import axios from 'axios';

const loginForm = document.querySelector('#usuario-form-login')

  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('/api/usuarios/login', {
        email: e.target.elements.email.value,
        password: e.target.elements.password.value
      })

      const AUTH_TOKEN = response.data.token
      localStorage.setItem('auth-token', AUTH_TOKEN)
      getAuthToken()
    } catch (error) {
      console.log(error)
    }
  })

  const getAuthToken = () => {
    const AUTH_TOKEN = localStorage.getItem('auth-token')
    console.log('auth token from usuario-login.ejs', AUTH_TOKEN)
    axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
  }

  getAuthToken()