import React from 'react'
import Navbar from './components/Navbar'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
// import HeroSection from './components/HeroSection'
 import Footer from './components/Footer'
//  import { Outlet } from 'react-router-dom'
// import {Home} from '../components/Home'
import {About} from './components/About'
import {Contact} from './components/Contact'
import Bookings from './components/Bookings'

const App = () => {
  return (
    <>
      <Navbar />
      {/* <Outlet /> */}
      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<Home />} /> */}
          <Route path='/about' element={<About />} />
          <Route path='/contact' element={<Contact />}/>
          <Route path='/bookings' element={<Bookings />} />
        </Routes>
      </BrowserRouter>
      <div className="max-w-7xl mx-auto pt-20 px-6">
        {/* <HeroSection /> */}  
        <hr className='border'/>
        <Footer />
      </div>
    </>
  )
}

export default App