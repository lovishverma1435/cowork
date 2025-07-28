
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Component/Common/Header'
import Footer from './Component/Common/Footer'
import Home from './Component/Pages/Home'
import Signup from './Component/card/Signup'
import Login from './Component/card/Login'
import Forget from './Component/card/Forgotpassword'
import Change from './Component/card/Changepassword'

function App() {
  // const isAuthPage = location.pathname === "/" || location.pathname === "/Signup" || location.pathname === "/forget" || location.pathname === "/change";
  return (
    <>
      <BrowserRouter>
        {
          // isAuthPage ?
            // <Routes>
            //   <Route path="/" element={<Login />} />
            //   <Route path="/Signup" element={<Signup />} />
            //   <Route path='/forget' element={<Forget />} />
            //   <Route path='/change' element={<Change />} />
            // </Routes>
            // :
            (<><Header />
              <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/signup' element={<Signup />} />
                <Route path='/login' element={<Login />} />
                <Route path='/forget' element={<Forget />} />
                <Route path='/change' element={<Change />} />
              </Routes>
              <Footer /></>)
        }
      </BrowserRouter>
    </>
  )
}

export default App
