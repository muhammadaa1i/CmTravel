import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify'
import Header from './Pages/Header/Header'

const App = () => {
  return (
    <div>
      <ToastContainer position='top-center' autoClose={3000} />
      <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/buxoro" element={<Header />} />
            <Route path="/samarqand" element={<Header />} />
            <Route path="/toshkent" element={<Header />} />
            <Route path="/zomin" element={<Header />} />
            <Route path="/xiva" element={<Header />} />
            <Route path="/turkiston" element={<Header />} />
            <Route path="/surxandaryo" element={<Header />} />
        </Routes>
    </div>
  )
}

export default App