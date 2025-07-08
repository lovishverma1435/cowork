
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Header from './Component/Common/Header'

function App() {

  return (
    <>
       <BrowserRouter>
       <Routes>
        <Route path='/' element={<Header/>}/>
       </Routes>
       </BrowserRouter> 
    </>
  )
}

export default App
