import express from 'express'

const APP = express()
const PORT = 3000
const LISTENER = () => console.log('Listening on PORT: ', PORT)

APP.listen(3000, LISTENER)


APP.get('/home', (req, res) => {
  res.send('hello world')
})
