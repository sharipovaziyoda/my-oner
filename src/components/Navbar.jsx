import React from 'react'
import  {NavLink, Outlet} from 'react-router-dom'
function Navbar() {
  return (
   <div>
    <nav className='bg-blue-600 text-white p-4 flex justify-between items-center'>
    <NavLink to="/" className="text-xl fond-bold">mylogo</NavLink>
    <NavLink to="search">Search</NavLink>
    <NavLink to="map">Map</NavLink>
    <NavLink to="phone">Phone</NavLink>
    <NavLink to="Register/exit">Register</NavLink>
    </nav>
   </div>
  )
}

export default Navbar