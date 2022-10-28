import {useState, useEffect} from 'react'
import {useSearchParams} from 'react-router-dom'

//Lectura de datos si se carga independientemente
import axios from 'axios'

//Regreso - Componentes
import Regreso from '../components/btnRegreso'
import Resultado from '../components/resultados'

const Results = () => {
    const [arrProducts, SetArrProducts] = useState([])
    const [estadoRespuesta, SetEstadoRespuesta] = useState(false)
    const [params] = useSearchParams()

    const search= params.get('search') ?? ''

    useEffect(()=>{
        filtrarBase()
    },[])

    const filtrarBase = () =>{
        let arrayProd = []
        axios.get('http://localhost:7000/api/items?q='+search)
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
        SetEstadoRespuesta(true)
        })
    }
    
  return (
    <div>
        <Regreso />
        {estadoRespuesta ? (<Resultado productos={arrProducts}/>) :(<div></div>)}
    </div>
  )
}

export default Results