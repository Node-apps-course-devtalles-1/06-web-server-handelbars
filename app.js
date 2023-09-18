const express = require('express')
const hbs = require('hbs')
require('dotenv').config()

const app = express()
const port = process.env.PORT

// handlebars
app.set('view engine', 'hbs')
hbs.registerPartials(__dirname + '/views/partials')

// servir contenido estatico
app.use(express.static('public'))

// app.get('/', (req, res) => {
//   res.send('Home')
// })

app.get('/generic', (req, res) => {
  res.render('generic', { name: 'Henry Gustav', title: 'node course' })
})

app.get('/elements', (req, res) => {
  res.render('elements', { name: 'Henry Gustav', title: 'node course' })
})

app.get('/', (req, res) => {
  res.render('home', { name: 'Henry Gustav', title: 'node course' })
})

app.get('/hello', (req, res) => {
  res.send('Hello World in route specific')
})

// tarea generic page

app.get('/generic', (req, res) => {
  res.sendFile(__dirname + '/public/generic.html')
})

app.get('/elements', (req, res) => {
  res.sendFile(__dirname + '/public/elements.html')
})

app.get('*', (req, res) => {
  //   res.send('404 Page not found')
  res.sendFile(__dirname + '/public/404.html')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
