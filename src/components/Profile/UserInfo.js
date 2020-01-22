import React from 'react';
 
class UserInfo extends React.Component {


  render() {
    const {user}=this.props
    return <>
            <div className="column">
                <ul>
                      <li> Name: {user.name} </li>
                      <li> UserName: {user.username}</li>
                      <li> Email: {user.email} </li>
                </ul>
              </div>
           </>
  }
}
 
export default UserInfo;