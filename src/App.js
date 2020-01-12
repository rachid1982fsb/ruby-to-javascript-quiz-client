import React from 'react';
import {connect} from 'react-redux'

import * as contstant from './contstants/Index'
import './App.css';
import Login from './components/Login'
import Quiz from './components/Quiz'
import {getCurrentUser} from './services/Api'
import {changeUsername} from './actions'



class App extends React.Component {

  componentDidMount() {
    if (contstant.token) {
      console.log('there is a token');
      // make a request to the backend and find our user
       getCurrentUser().then(user => {
        console.log(user)
        this.props.changeUsername(user)
      });
    }
  }

  login = data => {
    console.log(data)
    localStorage.setItem('token', data.jwt);
    this.props.changeUsername(data) 
  }; 
  

  render(){
        return (
            <div className="App">
              {this.props.currentUser.id ? <Quiz/> : <Login onLogin={this.login}/>}
            Hello
            </div>
          );
      }
}

  const mapStateToProps= state =>{
    return {
      currentUser: state.currentUser
    }
  }

  const mapDispatchToProps= dispatch =>{
    console.log("dispatch")
    return {
        changeUsername: user => dispatch(changeUsername(user))
    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(App)



