import {useState} from 'react'
import {useSearchParams, Link} from 'react-router-dom'

//Estilos
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'

const Buscador = ({productos, setProductosDinamic}) => {
  const [search, setSearch] = useSearchParams()
  const [busqueda, setBusqueda] = useState("")

  const name = search.get('items?search') || ''

  const filtrarProductos = () =>{
    let resultado = productos.filter((producto)=>{
      if( producto.nombre.toString().toLowerCase().includes(busqueda.toLowerCase()) || 
          producto.tipo.toString().toLowerCase().includes(busqueda.toLowerCase()))  {
          return producto
      }      
    })

    setProductosDinamic(resultado)
    if(busqueda !== ""){
      setSearch(busqueda)
    }else{
      setSearch({})
    }
  }

  
  return (
    <div>
        <div className="form-group form mt-2">
            <label htmlFor="tipo" className='m10px b'> 
              Buscar por nombre o tipo
            </label> {" "}
            <input type="text" value={busqueda} onChange={e=>setBusqueda(e.target.value)} className='m10px' />
            <Link to={'/items?search='+busqueda} className='btn btn-success m10px w50' onClick={filtrarProductos}>
                <FontAwesomeIcon icon={faSearch} />
            </Link>
        </div>
    </div>
  )
}

export default Buscador