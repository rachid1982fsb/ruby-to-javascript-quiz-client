import React from 'react';
import Submissions from '../components/Profile/Submissions'
import Algorithms from '../components/Profile/Algorithms'
import UserInfo from '../components/Profile/UserInfo'
import {connect} from 'react-redux'

 
class Profile extends React.Component {

    state=({
        user: {},
        correctResponses: [],
        userAlgorithms: []
    })

    componentDidMount(){
        const {currentUser, correctResponses, userAlgorithms} = this.props
        if(currentUser.id){  
        const userMethods = correctResponses.filter(method => method.user_id === currentUser.id)
        const userCodes = userAlgorithms.filter(method => method.user_id === currentUser.id)
        this.setState({
            user: currentUser,
            correctResponses: userMethods,
            userAlgorithms: userCodes
        },()=> console.log("Hello Profile Algo", userAlgorithms))
        }
    }


  render() {
      const {user, correctResponses, userAlgorithms}= this.state
      return <>
            <h1>This is my Profile component!</h1>
            <div className="ui vertically divided grid">
              <div className="two column row">
                <div className="ui raised very padded text container segment">
                  <Submissions correctResponses={correctResponses}/>
                </div>
                <div className="ui raised very padded text container segment">
                  <UserInfo user={user}/>
                </div>
                <div className="ui raised very padded text container segment">
                  <Algorithms userAlgorithms={userAlgorithms}/>
                </div>
              </div>
              </div>
           </>
  }
}
 

const mapStateToProps= state =>{
    return {
        currentUser: state.currentUser,
        source: state.source,
        testCases: state.testCases,
        correctResponses: state.correctResponses,
        userAlgorithms: state.userAlgorithms
    }
  }
  
  
  export default connect(mapStateToProps)(Profile)