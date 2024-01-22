import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = () => {
   
    return (
       
            <div className="container sticky-top">
            <div className= "row">
            <div className="col-12">
            <NavLink className="navbar-brand fw-bold fs-4 px-2" to="/"> Shopping Online</NavLink>
            </div>
            </div>
            </div>
       
    )
}

export default Header