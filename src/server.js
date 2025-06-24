const express = require('express')
const session = require('express-session')
const path = require('node:path')
const router = require('./routes')

const app = express()

app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))
app.use(express.urlencoded({ extended: true }))

app.use(session({
  secret: 'palavra-chave-secreta', // 934fn394f8bn09awefh9un8bw8ef
  resave: false,
  saveUninitialized: true,
  cookie: { secure: false }
}))

app.use(router)

app.listen(3000, () => console.log(`Servidor inciado em <http://localhost>:${PORT}/`))