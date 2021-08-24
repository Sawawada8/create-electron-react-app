const express = require('express')
const cors = require('cors')
const app = express()

app.use(cors())

app.get('/', (req, res) => {
    res.send({data: 'hello world!!!!!!!!'})
})


app.listen(3333, () => {
    console.log('server start')
})
