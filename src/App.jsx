
import { BrowserRouter, Route, Router, Routes } from 'react-router-dom'
import './App.css'
import Header from './Component/Common/Header'
import Footer from './Component/Common/Footer'

function App() {

  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
