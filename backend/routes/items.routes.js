const express =  require('express')
const router = express.Router()
const Producto = require('../models/product')

//Get -> Query
router.get('/', async (req, res)=>{
    const query = req.query.q
    const productos = await Producto.find()
    const queryResults = productos.filter((element)=>{
       if(element.nombre.toLocaleLowerCase().includes(query.toLocaleLowerCase()) 
       || element.tipo.toLocaleLowerCase().includes(query.toLocaleLowerCase())){
            return element
        }
    })
    res.json(queryResults);
})

  

module.exports = router