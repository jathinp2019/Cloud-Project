const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('<h1>AA</h1><h2>hai surajs 5 wives</h2>')
})

app.listen(port,() => {
    console.log(`listening on port ${port}`)
})

