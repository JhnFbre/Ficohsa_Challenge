import React from 'react'

import {Link} from 'react-router-dom'

const Producto = ({producto}) => {    
  return (
    <div className='col-md-6 mt-2'>
        <Link to={'/items/'+producto._id} className="fixStyleUrl">
            <div className="card">
                <div className="card-header text-success">
                    <span className='b'>{producto.nombre}</span>
                    <br />
                    <span className='b'>ID: {producto._id}</span>
                </div>
                <div className="card-body">
                    <p><span className='b'>Tipo Producto: </span> <span className="text-dark">{producto.tipo}</span></p>
                </div>
            </div>
        </Link>    
    </div>
    
  )
}

export default Producto