import React from 'react';
import Submissions from '../components/Profile/Submissions'
import UserInfo from '../components/Profile/UserInfo'
 
class Profile extends React.Component {


  render() {
    return <>
            <h1>This is my Profile component!</h1>
            <div class="ui vertically divided grid">
              <div class="two column row">
                <UserInfo/>
                <Submissions/>
              </div>
              </div>
           </>
  }
}
 
export default Profile;