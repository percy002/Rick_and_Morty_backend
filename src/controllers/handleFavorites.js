let myFavorites = []

const postFav = (req,res) => {
    let personaje = req.body
    // console.log(req.body);
    myFavorites.push(personaje)
    res.status(200).json(myFavorites)
}

const deleteFav = (req,res) => {
    let id = req.params.id
    let index= myFavorites.findIndex(char => char.id === id)
    console.log(index);
    myFavorites.splice(index,1)

    res.status(200).json(myFavorites)
}

module.exports={
    postFav,
    deleteFav
}