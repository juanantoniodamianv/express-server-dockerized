'use strict'

const express = require('express')
const app = express()
const port = process.env.PORT || 9999

app.get('/', (req, res) => {
  res.send(`Hello from Node ${process.version}`)
})

app.listen(port, () => console.log(`Server listening on port ${port}`))