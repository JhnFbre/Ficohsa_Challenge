import React from 'react'

//Regreso
import Regreso from '../components/btnRegreso'

const Error = () => {
  return (
    <div className='container mt-5'>
        <div className="bg-danger">
            <h2 className='text-center p-3 text-light'>
                Error 404 - No encontrado
            </h2>
        </div>
        <Regreso />
    </div>
  )
}

export default Error