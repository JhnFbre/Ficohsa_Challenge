//Declaracion
const express = require('express')
const app = express()
const cors = require('cors')
const path = require('path');
const PUERTO = 7000



//Configuraciones del server
app.set('port', process.env.PORT || PUERTO)
app.use(express.json())
app.use(cors({origin: true, credentials: true}))

//Rutas
app.use(express.static(path.join(__dirname, 'build')));;
app.use('/api/products',require('./routes/products.routes'))


app.listen(PUERTO, ()=>{
    console.log(`Puerto ${PUERTO} habilitado`)
})