const express = require('express')

require('dotenv').config()

require('../db/mongoose')

const usuarioRouter = require('../routers/usuario')

const frasesSalut = require('../models/frasesSalut')
const frasesRouter = require('../routers/frasesSalut')

const auth = require('../middleware/auth')

const port = process.env.PORT | 3001

// express app
const app = express();

// listen for requests
app.listen(port, () => {
  console.log(`Server listening to port ${port}`)
});

// register view engine
app.set('view engine', 'ejs');


// middleware & static files
app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }))

app.use((req, res, next) => {
  console.log('new request made:');
  console.log('host: ', req.hostname);
  console.log('path: ', req.path);
  console.log('method: ', req.method);
  next();
});



app.get('/', async (req, res) => {
 
  let lasFrases =  await frasesSalut.find({});
  let random = Math.floor(Math.random() * lasFrases.length);
  
  res.render('login', { title: 'Login', fraseSalut: lasFrases[random] });
});

app.get('/registro', async (req, res) => {
  res.render('signup', { title: 'Registro' });
});


app.get('/forum', (req ,res) => {
    res.render('forum', {title: 'Forum'})
})

app.use(express.json())
app.use('/api', usuarioRouter)
app.use('/api', frasesRouter)

// 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: '404' });
});