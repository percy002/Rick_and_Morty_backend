const users = require('../utils/users')

const login = (req,res) => {
    const {email,password} = req.query
    console.log(email);
    let usuario = users.find(user => user.email === email && user.password === password)

    if (usuario) {
        res.status(200).json({access:true})
    }else{
        res.status(200).json({access:false})
    }
}

module.exports = login