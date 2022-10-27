const express =  require('express')
const router = express.Router()
const axios = require('axios')

const url = "https://dummyjson.com/products"

//Get -> Todos los productos
router.get('/', async (req, res)=>{
    axios.get(url)
    .then(respuesta=>{
        return respuesta.data
    })
    .then( resultado =>{        
        const productos = resultado.products.map(element => {
            let producto = {
                _id: element.id,
                nombre: element.title, 
                tipo:  element.category,
                descripcion: element.description,
                imagen: element.thumbnail
            }
            return producto
        });
        res.json(productos);
    } )
    
})

//Get -> Un producto
router.get('/:id', async (req, res)=>{    
    const respuesta = await axios.get(url)
    .then(respuesta=>{
        return respuesta.data
    })
    .then( resultado =>{        
        return resultado.products.filter(element => {
            if(element.id.toString() === req.params.id){                
                return element
            }          
        })
    }).then((item)=>{
        let producto = {
            _id: item[0].id,
            nombre: item[0].title, 
            tipo:  item[0].category,
            descripcion: item[0].description,
            imagen: item[0].thumbnail
        }        
        return producto;
        
        
    }).catch(()=> {return {}})    
    res.json(respuesta)
} )

  

module.exports = router