const express =  require('express')
const router = express.Router()
const axios = require('axios')

const url = "https://dummyjson.com/products"

//Get -> Query
router.get('/', async (req, res)=>{
    const query = req.query.q
    const respuesta = await axios.get(url)
    .then(respuesta=>{           
        return respuesta.data
    })
    .then( resultado =>{        
        const productos = []
        resultado.products.forEach(element => {     
            if(element.title.includes(query) || element.category.includes(query)){
                let producto = {
                    _id: element.id,
                    nombre: element.title, 
                    tipo:  element.category,
                    descripcion: element.description,
                    imagen: element.thumbnail
                }    
                productos.push(producto)
            }                
        })        
        res.json(productos); 
    })
} )

  

module.exports = router