import React from 'react';
import {connect} from 'react-redux'

 
class UserInfo extends React.Component {

  state=({
    edit: false,
    name: "",
    username: "",
    email: ""
  })

//   static getDerivedStateFromProps(props, state){
//     return {name: props.user.name}
//  }
//  componentWillMount(){
//    this.setState({
//     name: this.props.user.name
//    })

//  }

  handleClick=()=>{
    this.setState({
      edit: !this.state.edit
    })
  }

  handleChange=(e)=>{
    console.log(e.target.name)
    this.setState({
      [e.target.name]: e.target.value
    })
  }


  render() {
    const {user}=this.props
    return <>
            <div className="column">
              {this.state.edit ?
                <form class="ui form">
                  <div class="field">
                    <input type="text"  value={this.state.name} name={"name"} onChange={this.handleChange} />
                  </div>
                  <div class="field">
                    <input type="text" value={this.state.username} name={"username"}  onChange={this.handleChange}/>
                  </div>
                  <div class="inline field">
                    <input type="text" value={this.state.email} name={"email"}  onChange={this.handleChange} />
                  </div>
              </form>
                : <ul>
                      <li  style={{fontWeight: 'bold'}}> Name: {user.name} </li>
                      <li  style={{fontWeight: 'bold'}}> UserName: {user.username}</li>
                      <li  style={{fontWeight: 'bold'}}> Email: {user.email} </li>
                </ul>}
                {this.state.edit ? <button className="ui right labeled icon right floated button" onClick={this.handleClick}><i className="save icon"></i>Save</button> : <button className="ui right labeled icon right floated button" onClick={this.handleClick}><i className="edit icon"></i>Edit</button>}

              </div>
           </>
  }
}
 
export default UserInfo;