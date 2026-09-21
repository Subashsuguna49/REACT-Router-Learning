import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Services from './components/Services'
import Contact from './components/Contact'
import Home from './components/Home'
import Aboutpage from './components/Aboutpage'
import Messager from './components/Messager'
import Template from './components/Template'
import './App.css'

const App = () => {

  const router =  createBrowserRouter([
    {
      path:"/",
      element:<Template/>,
      children: [
        {
          path:"/",
          element:<Home/>
          },
          {
            path:"/about",
            element:<Aboutpage/>
          },
          {
            path:"/contact",
            element:<Contact/>
          },
          {
            path:"/services",
            element:<Services/>
          },
          { path:"welcome/:username",
            element:<Messager/>
          },

          {
            path:"/*",
            element:<Error/>
          }
        ]
    }

  ])


  return <RouterProvider router={router} />

}
export default App