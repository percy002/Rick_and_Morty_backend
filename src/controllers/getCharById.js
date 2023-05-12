const axios = require('axios')
const URL = "https://rickandmortyapi.com/api/character/"

const getCharById = (req,res) => {
    const id = req.params.id

    axios(URL+id).then((data) => {
        if (data) {
            res.status(200).json(data)
        }
        else{
            res.status(404).send('Not Fount')
        }
    }).
    catch((error) => {
        res.status(500).send(error.message)
    })
}

module.exports = getCharById