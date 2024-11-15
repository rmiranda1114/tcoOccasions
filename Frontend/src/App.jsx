import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Main from './components/Main'
import Product from './components/Product'
import ContactUs from './components/ContactUs'

function App() {

  return (
    <main className=' bg-black text-white min-h-screen'>
      <Routes>
        <Route path='/' element={<Navbar />}>
          <Route path='/' element={<Main />} />
          <Route path='/service/:productId' element={<Product />} />
          <Route path='/contactus' element={<ContactUs />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App
