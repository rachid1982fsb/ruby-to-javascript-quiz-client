import React from 'react'
import { NavLink } from 'react-router-dom';




  class Navbar extends React.Component {
    render() {
      return (
        <div className="ui inverted menu">
          <NavLink to="/login" exact  className="item"> Login </NavLink>
          <NavLink to="/quiz" exact  className="item"> Quiz </NavLink>
          <NavLink to="/profile" exact  className="item"> Profile </NavLink>
          <NavLink to="/analyzeAlgorithm" exact  className="item"> Analyze Algorithm </NavLink>
          <NavLink to="/about" exact  className="item"> About </NavLink>
        </div>
      )
    }
  }
   
  export default Navbar;