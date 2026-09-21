import React from 'react'
import { Outlet,Link} from 'react-router-dom'

const Template = () => {
  return (
    <>
        <nav className='nav'>
            <Link to="/">home</Link>
            <Link to="/about">about</Link>
            <Link to="/contact">contact</Link>
            <Link to="/services">services</Link>
        </nav>

        <div className='content'>

             <Outlet/>


        </div>

       
    
    
    
    </>
    
  )
}

export default Template