import React from 'react';
import {connect} from 'react-redux'

 
class UserInfo extends React.Component {


  render() {
    const {user}=this.props
    return <>
            <div className="column">
                <ul>
                      <li  style={{fontWeight: 'bold'}}> Name: {user.name} </li>
                      <li  style={{fontWeight: 'bold'}}> UserName: {user.username}</li>
                      <li  style={{fontWeight: 'bold'}}> Email: {user.email} </li>
                </ul>
                <button className="ui right labeled icon right floated button" ><i className="edit icon"></i>Edit</button>
              </div>
           </>
  }
}
 
export default UserInfo;