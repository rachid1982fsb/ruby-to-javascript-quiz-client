import React from 'react'
import {connect} from 'react-redux'
import { NavLink, Redirect } from 'react-router-dom';
import * as contstant from '../contstants/Index'
import {logout} from '../actions'

  const  Navbar = props => {

    const currentUser = props.currentUser;
    const loggedIn = !!currentUser.id;

      return (
        <div className="ui inverted menu">
           {loggedIn ? (
            <a className="item">Welcome {currentUser.username}</a>
              ) : null}
              {loggedIn ? (
                <a className="item">
                  <div
                    onClick={() => {
                      props.logout()
                    }}
                    className="ui primary button"
                  >
                    Sign Out
                  </div>
                </a>
              ) : (
          <NavLink to="/" exact className="item">
          Sign In
          </NavLink>)}
          <NavLink to="/quiz" exact  className="item"> Quiz </NavLink>
          {loggedIn ? <NavLink to="/profile" exact  className="item"> Profile </NavLink> : null}
          <NavLink to="/algorithm" exact  className="item"> Algorithm </NavLink>
          {currentUser.username==="Admin" ? <NavLink to="/admin" exact  className="item"> Admin </NavLink> : null }
          {currentUser.username==="Admin" ? <NavLink to="/users" exact  className="item"> Users </NavLink> : null }
          <NavLink to="/about" exact  className="item"> About </NavLink>
          
        </div>
      )
    
  }
   

  const mapStateToProps= state =>{
    return {
      currentUser: state.currentUser
    }
  }

  const mapDispatchToProps= dispatch =>{
    console.log("dispatch")
    return {
        logout: () => dispatch(logout())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar)
  
  