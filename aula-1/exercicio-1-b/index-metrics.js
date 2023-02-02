import express from 'express'

// import { monitorEventLoopDelay } from 'perf_hooks'

// const monitor = monitorEventLoopDelay()
// monitor.enable()

const APP = express()
const PORT = 3000
const LISTENER = () => console.log('Listening on PORT: ', PORT)

APP.listen(3000, LISTENER)


APP.get('/home', (req, res) => {
  for(let n=0; n<1e9; n++) {}
  // console.log(monitor.mean, monitor.max)
  res.send('hello world')
})
