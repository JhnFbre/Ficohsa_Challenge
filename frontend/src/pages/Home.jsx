import React from 'react'
import Buscador from '../components/buscador'
import Resultado from '../components/resultados'

const Home = ({productos, estadoResultados}) => {
  return (
    <div>
        <Buscador />
        {estadoResultados ? (<Resultado productos={productos}/>) :(<div></div>)}
    </div>
  )
}

export default Home