import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home'

const App = () => {
  const routes=createBrowserRouter([
    {
      path:'/',
      element:<Home/>
    }
  ])
  return (
    <div>
      <RouterProvider router={routes}/>
    </div>
  )
}

export default App