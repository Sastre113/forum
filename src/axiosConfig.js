import axios from 'axios';
var token = localStorage.getItem('auth-token');
axios.defaults.baseURL = 'http://localhost:3001/api/';
axios.defaults.headers.common = {'Authorization':`Bearer ${token}`};
export default axios;