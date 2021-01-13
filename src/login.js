import axios from './axiosConfig';

const loginForm = document.querySelector('#usuario-form-login')

loginForm.addEventListener('submit', (e) => {
  e.preventDefault()
  const response = axios.post('/usuarios/login', {
    email: e.target.elements.email.value,
    password: e.target.elements.password.value
  })

  response.then((auth) => {
    // console.log(auth)
    const AUTH_TOKEN = auth.data.token
    localStorage.setItem('auth-token', AUTH_TOKEN)
    getAuthToken()
    window.location.href = '/forum';
  }).catch((error) =>{
    console.log(error)
  })
})

const getAuthToken = () => {
  const AUTH_TOKEN = localStorage.getItem('auth-token')
  // console.log('auth token from usuario-login.ejs', AUTH_TOKEN)
  axios.defaults.headers.common['Authorization'] = AUTH_TOKEN
}
