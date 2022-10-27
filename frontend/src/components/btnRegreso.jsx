import React from 'react'
import {Link} from 'react-router-dom'

//Estilos
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'
import {faArrowLeft} from '@fortawesome/free-solid-svg-icons'

const btnRegreso = ({restablecerFilas = ()=>{}}) => {
  return (
    <div>
        <Link to='/' className='btn btn-danger text-center' onClick={()=>restablecerFilas()}>
            <FontAwesomeIcon icon={faArrowLeft} />    Home
        </Link>
    </div>
  )
}

export default btnRegreso