import {useState, useEffect} from 'react'
import {useSearchParams} from 'react-router-dom'


//Lectura de datos si se carga independientemente
import axios from 'axios'

//Regreso - Componentes
import Regreso from '../components/btnRegreso'
import Resultado from '../components/resultados'

const Results = ({estadoResultados, productos, productosDinamic, setProductosDinamic}) => {
    const [arrProducts, SetArrProducts] = useState([])
    const [params] = useSearchParams()

    const search= params.get('search') ?? ''

    useEffect(()=>{
        if(productosDinamic.length ===0){
            reFilter()
        }else{
            SetArrProducts(productosDinamic)
        }
    },[])

    const reFilter = () =>{
        let arrayProd = []

        axios.get('http://localhost:7000/api/products')
        .then(response=>{
        arrayProd = response.data.filter(product=>{
            if(search.toString().length === 0){
                return product
            }else{
                if(product.nombre.toString().toLowerCase().includes(search.toLowerCase()) || 
                   product.tipo.toString().toLowerCase().includes(search.toLowerCase()))  {
                        return product
                }
            }            
        })
        SetArrProducts(arrayProd)
        })
    }

    const restablecerFilas = () =>{
        setProductosDinamic(productos)
    }
  return (
    <div>
        <Regreso restablecerFilas={restablecerFilas} />        
        {estadoResultados ? (<Resultado productos={arrProducts} />):(<div></div>)}
    </div>
  )
}

export default Results