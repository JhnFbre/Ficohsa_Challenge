import {useState, useEffect} from 'react'
import {useLocation } from 'react-router-dom'

//Componentes
import Regreso from '../components/btnRegreso'

//Lectura de datos
import axios from 'axios'

const Details = ({productos, setProductosDinamic}) => {

    const [producto, setProducto] = useState({})
    
    const location = useLocation();

    useEffect(()=>{          
        CargarItem()   
      },[]);
    
      const CargarItem = () =>{
        let singleProd = {}        
        const idProduct = location.pathname.toString().substr(7,location.pathname.toString().length) ?? ''

        if(idProduct !== ''){
            axios.get('http://localhost:7000/api/products/'+idProduct)
            .then(response=>{
                singleProd = response.data
                setProducto(singleProd)
            })
        }       
        
      }
      const restablecerDinamic = () =>{
        setProductosDinamic(productos)
    }
  return (
    <div>
        <Regreso restablecerFilas={restablecerDinamic} />    
        <div className="container mt-5">
            <div className="detail">
                <div className="card">
                    <div className="card-header">
                        <span className="b">{producto.nombre}</span>
                        <br />
                        {producto._id}
                    </div>
                    <div className="card-body">
                        <img src={producto.imagen} alt={producto.nombre} />
                        <p className='text-justify mt-3 '>
                            <span className="b">Descripción: </span> {producto.descripcion}
                        </p>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Details