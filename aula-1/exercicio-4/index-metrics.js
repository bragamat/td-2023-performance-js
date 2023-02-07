import express from 'express'
import { performance } from 'perf_hooks'

const APP = express()
const PORT = 3000
const LISTENER = () => console.log('Listening on PORT: ', PORT)

import { FetchDataInDB } from './utils.js'

APP.listen(3000, LISTENER)

APP.get('/items', async (_req, res) => {
  performance.mark('A');

  const data = await FetchDataInDB()

  res.status = 200;

  performance.mark('B');
  performance.measure('A to B', 'A', 'B');

  const measure = performance.getEntriesByName('A to B')[0];

  res.send(`It took ${measure.duration} ms - ${data.length}`);
})
