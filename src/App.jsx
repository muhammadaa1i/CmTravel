import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home/Home'
import { ToastContainer } from 'react-toastify'
import Buxoro from './Pages/Buxoro/Buxoro'
import Samarqand from './Pages/Samarqand/Samarqand'
import Toshkent from './Pages/Toshkent/Toshkent'
import Zomin from './Pages/Zomin/Zomin'
import Xiva from './Pages/Xiva/Xiva'
import Turkiston from './Pages/Turkiston/Turkiston'
import Surxandaryo from './Pages/Surxandaryo/Surxandaryo'

const App = () => {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <Home />,
      children: [
        {
          path: '/buxoro',
          element: <Buxoro />
        },
        {
          path: '/samarqand',
          element: <Samarqand />
        },
        {
          path: '/toshkent',
          element: <Toshkent />
        },
        {
          path: '/zomin',
          element: <Zomin />
        },
        {
          path: '/xiva',
          element: <Xiva />
        },
        {
          path: '/turkiston',
          element: <Turkiston />
        },
        {
          path: '/surxandaryo',
          element: <Surxandaryo />
        }
      ]
    }
  ])
  return (
    <div>
      <ToastContainer position='top-center' autoClose={3000} />
      <RouterProvider router={routes} />
    </div>
  )
}

export default App