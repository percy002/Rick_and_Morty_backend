// const http = require('http');
const PORT = 3001
// const data = require('./utils/data')
const getCharById = require('./controllers/getCharById')

const express = require('express');
const server = express();

server.use(json)
server.listen(PORT,() => {
    console.log('server in port'+PORT);
})


// http.createServer((req,res) => {
//     res.setHeader('Access-Control-Allow-Origin', '*');

//     // if (req.url.includes('/rickandmorty/character')) {
//     //     let id = req.url.split('/').at(-1)
//     //     found = data.find(char => char.id === Number(id))
//     //     if (found) {
//     //         res.writeHead(202,{"content-type":"application/json"})
//     //         res.end(JSON.stringify(found))
//     //     }
//     //     console.log(id,found);
//     // }

//     if (req.url.includes('rickandmorty/character')) {
//         let id = req.url.split('/').at(-1)
//         // console.log(req.url);
//         getCharById(res,id)
//     }
// }).listen(PORT,console.log(`port on ${PORT}`))