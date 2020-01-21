import React from 'react';
import {connect} from 'react-redux'

import * as contstant from './contstants/Index'
import './App.css';
import Login from './components/Login'
import Quiz from './containers/Quiz'
import {getCurrentUser} from './services/Api'
import {onLogin, setSources, setTestCases, setCorrectResponses} from './actions'
import {fetchSource, fetchTestCases,fetchCorrectResponses} from './services/Api'




class App extends React.Component {

  componentDidMount() {
    fetchSource().then(res => this.props.setSources(res))
    fetchTestCases().then(res => this.props.setTestCases(res))
    if (contstant.token) {
      console.log('there is a token');
      // make a request to the backend and find our user
       getCurrentUser().then(user => {
        this.props.onLogin(user)
        fetchCorrectResponses(user.id).then(res => this.props.setCorrectResponses(res))
      });
    }
  }

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
      currentUser: state.currentUser,
      testCases: state.testCases,
      source: state.source,
      correctResponses: state.correctResponses
    }
  }

  const mapDispatchToProps= dispatch =>{
    console.log("dispatch")
    return {
      onLogin: resp => dispatch(onLogin(resp)),
      setSources: resp => dispatch(setSources(resp)),
      setTestCases: resp => dispatch(setTestCases(resp)),
      setCorrectResponses: resp => dispatch(setCorrectResponses(resp))

    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(App)



