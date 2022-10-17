import React from 'react'
import {NavLink} from "react-router-dom"

function Nav() {
  return (
    <div className='nav'>
              {/* <Link to ="/">Home</Link> */}
              <h2>Travel Ventory</h2>
      <NavLink to ="/"><h3>Home</h3></NavLink>
      <NavLink to ="/login"><h3>Login</h3></NavLink>
      <NavLink to ="/signup"><h3>SignUp</h3></NavLink>
        {/* Nav */}
        </div>
  )
}

export default Nav