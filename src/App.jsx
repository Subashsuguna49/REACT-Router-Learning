import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Services from './components/Services'
import Contact from './components/Contact'
import Home from './components/Home'
import About from './components/about'
import Message from './components/message'
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
            element:<About/>
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
            element:<Message/>
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