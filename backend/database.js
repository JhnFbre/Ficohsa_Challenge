const mongoose =  require('mongoose')
const BASE = 'mongodb://localhost/ficohsachallenge'
mongoose.connect(BASE)
.then(db =>console.log("Base conectada"))
.catch(err =>console.error("Error en base"))

module.exports = mongoose