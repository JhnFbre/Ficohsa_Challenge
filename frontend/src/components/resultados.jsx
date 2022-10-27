import React from 'react'

//Componentes
import Producto from './producto'

const Resultados = ({productos}) => {
    return (
      <div className='container'>
        {productos.length > 0 ? (
        <div productos={productos} >
          <h4 className='mt-3 mb-2 b'>Productos: {productos.length}</h4>
          <div className="row col-container">          
            {
              productos.map(
                (producto) => (<Producto key={producto.nombre} producto={producto} />)
              )
            }
          </div>
        </div>):(<div>
          <h6 className='b text-center mt-5'>Sin resultados</h6>
        </div>)}
        
      </div>
    )
}

export default Resultados