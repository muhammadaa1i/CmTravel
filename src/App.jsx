import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Home from './Pages/Home/Home'

const App = () => {
  return (
    <div>
      <ToastContainer position='top-center' autoClose={3000} />
      <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/buxoro" element={<Home />} />
            <Route path="/samarqand" element={<Home />} />
            <Route path="/toshkent" element={<Home />} />
            <Route path="/zomin" element={<Home />} />
            <Route path="/xiva" element={<Home />} />
            <Route path="/turkiston" element={<Home />} />
            <Route path="/surxandaryo" element={<Home />} />
        </Routes>
    </div>
  )
}

export default App