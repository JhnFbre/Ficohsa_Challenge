const express =  require('express')
const router = express.Router()
const Producto = require('../models/product')

//Get -> Todos los productos
router.get('/', async (req, res)=>{
    const productos = await Producto.find()
    res.json(productos);
})

//Get -> Un producto
router.get('/:id', async (req, res)=>{
    const productos = await Producto.findById(req.params.id).catch(()=>{return {}})
    res.json(productos);
})

// Post -> Agregar producto
router.post('/', async (req, res) => {
    const { nombre, descripcion, tipo, imagen   } = req.body;
    const producto = new Producto({nombre, descripcion, tipo, imagen});
    await producto.save();
    res.json({status: 'Producto agregado'});
});

  

module.exports = router