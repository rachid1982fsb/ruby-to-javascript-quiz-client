import React from 'react'
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom';
import * as contstant from '../contstants/Index'
import {logout} from '../actions'







  const  Navbar = props => {

    const currentUser = props.currentUser;
    const loggedIn = !!props.currentUser.id;
      return (
        <div className="ui inverted menu">
           {loggedIn ? (
            <a className="item">Welcome {currentUser.username}</a>
              ) : null}
              {loggedIn ? (
                <a className="item">
                  <div
                    onClick={() => {
                      props.logout();
                      // props.history.push('/login'
                      // );
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
          {/* <NavLink to="/login" exact  className="item"> {contstant.token ? "LogOut": "Login"} </NavLink> */}
          <NavLink to="/quiz" exact  className="item"> Quiz </NavLink>
          <NavLink to="/profile" exact  className="item"> Profile </NavLink>
          <NavLink to="/analyzeAlgorithm" exact  className="item"> Algorithm </NavLink>
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
  
  