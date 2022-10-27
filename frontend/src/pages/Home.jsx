import React from 'react'
import Buscador from '../components/buscador'
import Resultado from '../components/resultados'

const Home = ({estadoResultados, productos, productosDinamic, estadoShowResultados, setProductosDinamic, setEstadoShowResultados}) => {
  return (
    <div>
        <Buscador productos={productos} 
                  setProductosDinamic={setProductosDinamic} 
                  setEstadoShowResultados={setEstadoShowResultados} />
        {estadoResultados ? (
            <Resultado productos={productosDinamic} 
                       estadoShowResultados={estadoShowResultados} />):(<div></div>)}
    </div>
  )
}

export default Home