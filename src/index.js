const PORT = 3001

const router = require('./routes/index')
const express = require('express');
const server = express();
const morgan = require('morgan')

server.use(express.json())
server.use(morgan('dev'))

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Credentials', 'true');
    res.header(
       'Access-Control-Allow-Headers',
       'Origin, X-Requested-With, Content-Type, Accept'
    );
    res.header(
       'Access-Control-Allow-Methods',
       'GET, POST, OPTIONS, PUT, DELETE'
    );
    next();
 });

 server.use('/rickandmorty',router)
 
 
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