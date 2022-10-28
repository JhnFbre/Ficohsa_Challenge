//React
import {useState, useEffect} from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

//Estilos
import './App.css';
import "bootstrap/dist/css/bootstrap.css";

//Lectura de datos
import axios from 'axios'

//Paginas
import Home from './pages/Home'
import Results from './pages/Results'
import Details from './pages/Details'
import Error from './pages/Error'

//Componentes
import Header from './components/header'

function App() {
  const [productos, setProductos] = useState([])
  const [estadoResultados, setEstadoResultados] = useState(false)

  useEffect(()=>{  
    cargarBase()   
  },[]);

  const cargarBase = () =>{
    let arrayProd = []
    axios.get('http://localhost:7000/api/products')
        .then(response=>{
          arrayProd = response.data.map(product=>{
            return product
          })
          setProductos(arrayProd)    
          setEstadoResultados(true)                 
        })
  }
  return (    
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <Home estadoResultados={estadoResultados} productos={productos} />} exact />
          <Route path="items" element={
            <Results estadoResultados={estadoResultados} />} />
          <Route path="items/:id" element={
            <Details />} />
          <Route path="*" element={<Error />} />          
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
