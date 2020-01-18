import React from 'react';
import Submissions from '../components/Profile/Submissions'
import UserInfo from '../components/Profile/UserInfo'
import {connect} from 'react-redux'

 
class Profile extends React.Component {

    state=({
        user: {},
        correctResponses: []
    })
    componentDidMount(){
        const {currentUser, correctResponses} = this.props
        if(currentUser.id){  
        const userMethod = correctResponses.filter(method => method.user_id === currentUser.id)
        this.setState({
            user: currentUser,
            correctResponses: userMethod
        },()=> console.log("Hello Profile",this.state.correctResponses, this.state.user))
        }
    }


  render() {
      const {user, correctResponses}= this.state
      return <>
            <h1>This is my Profile component!</h1>
            <div class="ui vertically divided grid">
              <div class="two column row">
                <UserInfo user={user}/>
                <Submissions correctResponses={correctResponses}/>
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
        correctResponses: state.correctResponses
    }
  }
  
  
  export default connect(mapStateToProps)(Profile)