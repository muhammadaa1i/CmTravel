import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home'
import { ToastContainer } from 'react-toastify'

const App = () => {
  const routes=createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    }
  ])
  return (
    <div>
      <ToastContainer position='top-center' autoClose={3000}/>
      <RouterProvider router={routes}/>
    </div>
  )
}

export default App