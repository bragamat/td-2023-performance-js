import express from 'express'
import { FetchDataInDB } from './utils.js'

const APP = express()
const PORT = 3000

const LISTENER = () => {
  console.log('Listening on PORT: ', PORT)
}

APP.listen(3000, LISTENER)

APP.get('/items', async (_req, res) => {
  const data = await FetchDataInDB()

  res.status = 200;
  res.json({ items: data });
})
