
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './App.css'
import Header from './Component/Common/Header'
import Footer from './Component/Common/Footer'
import Home from './Component/Pages/Home'
import Signup from './Component/card/Signup'
import Login from './Component/card/Login'
import Forget from './Component/card/Forgotpassword'
import Change from './Component/card/Changepassword'
import About from './Component/Pages/About'
import HowitWorks from './Component/Pages/HowitWorks'
import Blog from './Component/Pages/Blog'
import Contact from './Component/Pages/Contact'
import BrowserWorkspace from './Component/Pages/BrowserWorkspace'
import Workspacedetails from './Component/workspacedetails/Workspacedetails'

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
                <Route path='/about' element={<About />} />
                <Route path='/howitworks' element={<HowitWorks />} />
                <Route path='/blog' element={<Blog />} />
                <Route path='/contact' element={<Contact />} />
                <Route path='/browserworkspace' element={<BrowserWorkspace/>} />
                <Route path='/workspacedetails/details' element={<Workspacedetails/>}/>
              </Routes>
              <Footer /></>)
        }
      </BrowserRouter>
    </>
  )
}

export default App
