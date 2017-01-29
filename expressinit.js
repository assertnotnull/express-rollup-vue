var express = require('express')
var app = express()
var exppino = require('express-pino-logger')()
var pino = require('pino')()

// app.use(exppino)
app.set('view engine', 'pug')
app.set('views', './front/views')
app.use(express.static('public'))

app.get('/', function (req, res) {
  pino.info('something')
  res.render('index')
})

app.listen(3000)