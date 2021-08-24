const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()

app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
app.use(cors())

app.get('/', (req, res) => {
    res.send({data: 'hello world!!!!!!!!'})
})
app.post('/', (req, res) => {
    console.log(req.body)
    res.send({data: 'post hello world!!!!!!!!'})
})
app.get('/v', (req, res) => {
    res.send({data: 'called v api'})
})

app.listen(3333, () => {
    console.log('server start')
})
