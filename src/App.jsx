
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Header from './Component/Common/Header'
import Footer from './Component/Common/Footer'
import Home from './Home'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path='/' element={<Home/>}/>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
