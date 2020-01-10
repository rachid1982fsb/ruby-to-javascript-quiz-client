import React from 'react'
import * as BarLinkStyle from '../contstants/Link'
import { NavLink } from 'react-router-dom';




  class Navbar extends React.Component {
    render() {
      return (
        <div>
          <NavLink
            to="/login"
            exact
            style={BarLinkStyle.Link}
            activeStyle={{
              background: 'darkblue'
            }}
          >Login</NavLink>
            <NavLink
            to="/about"
            exact
            style={BarLinkStyle.Link}
            activeStyle={{
              background: 'darkblue'
            }}
          >About</NavLink>
        </div>
      )
    }
  }
   
  export default Navbar;