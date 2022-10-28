import {useState} from 'react'
import {Link} from 'react-router-dom'

//Estilos
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faSearch} from '@fortawesome/free-solid-svg-icons'

const Buscador = () => {
  
  const [busqueda, setBusqueda] = useState("")  
  return (
    <div>
        <div className="form-group form mt-2">
            <label htmlFor="tipo" className='m10px b'> 
              Buscar por nombre o tipo
            </label> {" "}
            <input type="text" value={busqueda} onChange={e=>setBusqueda(e.target.value)} className='m10px' />
            <Link to={'/items?search='+busqueda} className='btn btn-success m10px w50'>
                <FontAwesomeIcon icon={faSearch} />
            </Link>
        </div>
    </div>
  )
}

export default Buscador