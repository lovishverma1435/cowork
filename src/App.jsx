
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Component/Common/Header'
import Footer from './Component/Common/Footer'
import Home from './Component/Pages/Home'
import Signup from './Component/card/Signup'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/signup' element={<Signup/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
