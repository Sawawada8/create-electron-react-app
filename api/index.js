const http = require('http')

const server = http.createServer((req, res) => {
    console.log('----------')
    console.log('request!!')
    console.log({req})
    console.log('----------')
    //res.header(
    //    'Access-Control-Allow-Headers',
    //    'Content-Type, Authorization, access_token'
    //)
    res.writeHead(200, { 
        'Content-Type': 'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Methods': 'GET,PUT,POST,DELETE',
    });
    res.end(JSON.stringify({
        data: 'Hello World!'
    }));
})

server.listen(3333)
