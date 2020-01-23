import React from 'react';
import {connect} from 'react-redux'

import * as contstant from './contstants/Index'
import './App.css';
import Login from './components/Login'
import Quiz from './containers/Quiz'
import {getCurrentUser} from './services/Api'
import {onLogin, setSources, setTestCases, setCorrectResponses,setUserAlgorithms,setCurrentUser} from './actions'
import {fetchSource, fetchTestCases,fetchCorrectResponses,fetchUserAlgorithms,getCurrentUserData} from './services/Api'

const token = localStorage.getItem('token');


class App extends React.Component {

  componentDidMount() {
    fetchSource().then(res => this.props.setSources(res))
    fetchTestCases().then(res => this.props.setTestCases(res))
    if (token!="undefined" && token!=null) {
      
      getCurrentUserData(this.props.currentUser.id).then((user)=> {
        user.jwt=token
        this.props.onLogin(user)
        console.log(user)})
      console.log('there is a token');
      fetchUserAlgorithms().then(res => this.props.setUserAlgorithms(res)).then(() => fetchCorrectResponses().then(res => this.props.setCorrectResponses(res)))
      // getCurrentUserData()
    }
  }

  render(){
        return (
            <div className="App">
              {this.props.currentUser.id ? <Quiz/> : <Login />}
            </div>
          );
      }
}

  const mapStateToProps= state =>{
    return {
      currentUser: state.currentUser,
      testCases: state.testCases,
      source: state.source,
      correctResponses: state.correctResponses,
      userAlgorithms: state.userAlgorithms
    }
  }

  const mapDispatchToProps= dispatch =>{
    console.log("dispatch")
    return {
      onLogin: resp => dispatch(onLogin(resp)),
      setSources: resp => dispatch(setSources(resp)),
      setTestCases: resp => dispatch(setTestCases(resp)),
      setUserAlgorithms: resp => dispatch(setUserAlgorithms(resp)),
      setCorrectResponses: resp => dispatch(setCorrectResponses(resp))
      

    }
  }

export default connect(mapStateToProps, mapDispatchToProps)(App)



