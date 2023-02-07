import express from 'express'
import { FetchDataInDB } from './utils.js'
import { EventEmitter } from 'events';

const APP = express()
const PORT = 3000

const chat = new EventEmitter();

const LISTENER = () => {
  chat.emit('connected')
  console.log('Listening on PORT: ', PORT)
}

const ans = []

chat.once('connected', (event, listener) => {

  chat.on('connected', () => {
    console.log('connected');
    ans.push(ans)
  });

  chat.on('new_req', () => {
    ans.push(ans)
    console.log('new_req');
  });
});


APP.listen(3000, LISTENER)


APP.get('/items', async (_req, res) => {
  chat.emit('new_req')
  const data = await FetchDataInDB()

  res.status = 200;
  res.json({ items: data });
})
