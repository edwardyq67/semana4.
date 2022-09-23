
import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import ProductsForm from './components/ProductsForm'
import ProductsList from './components/ProductsList'

function App() {
   const [formt,setFormt]=useState([])
   const [selectFormt,setSelecFormt]=useState(null)
   useEffect(()=>{
    axios.get('https://users-crud1.herokuapp.com/users/')
    .then(res=>setFormt(res.data))
   },[])
   const getProducts=()=>{
    axios.get('https://users-crud1.herokuapp.com/users/')
    .then(res=>setFormt(res.data))
   }
   const selectProduct=(form)=>{
    alert("seleccionado")
    setSelecFormt(form)
   }
   const deselectFormt=()=>{
    setSelecFormt(null)
   }

  return (
    <div className="App">
      
      <ProductsForm getProducts={getProducts} selectFormt={selectFormt} deselectFormt={deselectFormt}/>
      <ProductsList getProducts={getProducts} formt={formt} selectProduct={selectProduct}/>
    </div>
  )
}

export default App
