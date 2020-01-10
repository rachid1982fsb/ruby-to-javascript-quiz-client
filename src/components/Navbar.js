import React from 'react'
import { NavLink } from 'react-router-dom';


const link = {
    width: '100px',
    padding: '12px',
    margin: '0 6px 6px',
    background: 'blue',
    textDecoration: 'none',
    color: 'white',
  }

  class Navbar extends React.Component {
    render() {
      return (
        <div>
          <NavLink
            to="/login"
            exact
            style={link}
            activeStyle={{
              background: 'darkblue'
            }}
          >Login</NavLink>
            <NavLink
            to="/about"
            exact
            style={link}
            activeStyle={{
              background: 'darkblue'
            }}
          >About</NavLink>
        </div>
      )
    }
  }
   
  export default Navbar;