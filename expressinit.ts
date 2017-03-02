import * as express from "express";
// var express = require('express')
var app = express()
// const app: express.Application = express();
var exppino = require('express-pino-logger')()
const pino = require('pino')()

// app.use(exppino)
app.set('view engine', 'pug')
app.set('views', './front/views')
app.use(express.static('public'))

app.get('/', function (req: express.Request, res: express.Response) {
  pino.info('something')
  res.render('index')
})

app.listen(3000)