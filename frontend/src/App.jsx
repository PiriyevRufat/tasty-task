import { useContext, useEffect, useState } from 'react'
import ROUTES from './routes/Routes'
import MainContext from './context/context'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import axios from 'axios'
function App() {
  const router=createBrowserRouter(ROUTES)
  const [data, setData] = useState([])
  const [basketItems,setBasketItems]=useState(localStorage.getItem("basketItems")?JSON.parse(localStorage.getItem("basketItems")):[])
  const contextData={
    data,setData,basketItems,setBasketItems
  }
  useEffect(()=>{
    axios.get("http://localhost:8080/api/products").then(res=>{
      setData(res.data)
    })
   },[])
  return (
    <MainContext.Provider value={contextData}>
    <RouterProvider router={router} />  
    </MainContext.Provider>
  )
}

export default App
