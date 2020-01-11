import React from 'react';
import {changeUsername} from '../actions'
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom';

import {login, getCurrentUser} from '../services/Api'



class Login extends React.Component{

    state=({
        fields: {
            username: "",
            password: ""
        }
    })

    handelChange=(e)=>{
        const newFields = { ...this.state.fields, [e.target.id]: e.target.value };
        this.setState({ fields: newFields });
    }

    handelLoginClick = e => {
        e.preventDefault();
        login(this.state.fields).then(res => {
          if (!res.error) {
            console.log(res)
            localStorage.setItem('token', res.jwt);
            getCurrentUser().then(user => {
                console.log(user)
                this.props.changeUsername(user)
            })
            // // const updatedState = { ...this.state.auth, user: res };
            // this.props.onLogin(res);
            // this.props.history.push('/');
          } else {
              console.log("eroor")
            // this.setState({ error: true });
          }
        });
      };

    // handelLoginClick=()=>{
    //     this.props.changeUsername(this.state.username)
    // }

    onHandleSignupClick=()=>{
        return <a href="/signup"></a>
    }

    render(){
            return(
                <div>
                <div className="ui placeholder segment">
                    <div className="ui two column very relaxed stackable grid">
                        <div className="column">
                            <div className="ui form">
                                <div className="field">
                                    <label>Username</label>
                                        <div className="ui left icon input">
                                            <input type="text" placeholder="Username" id="username"  onChange={this.handelChange}/>
                                                <i className="user icon"></i>
                                        </div>
                                </div>
                                <div className="field">
                                    <label>Usernamedisplay</label>
                                        <div className="ui left icon input">
                                            <input type="text" placeholder="Username"   value={this.props.username}/>
                                                <i className="user icon"></i>
                                        </div>
                                </div>
                                <div className="field">
                                    <label>Password</label>
                                    <div className="ui left icon input">
                                        <input type="password" id="password" onChange={this.handelChange}/>
                                        <i className="lock icon"></i>
                                    </div>
                                </div>
                                <div className="ui blue submit button" onClick={(e)=> this.handelLoginClick(e)}>Login</div>
                            </div>
                        </div>
                        <div className="middle aligned column">
                        <div className="ui big button" >
                            <i className="signup icon"></i>
                            <NavLink to="/signup" exact >Sign Up</NavLink>
                        </div><br/>
                        <div className="ui big button" >
                            Guest
                        </div>
                        </div>
                    </div>
                    <div className="ui vertical divider">
                            Or
                    </div>
                </div>
                </div>
            )
    }

}

const mapStateToProps= state =>{
    return {
        fields: state.fields
    }
}

const mapDispatchToProps= dispatch =>{
    console.log("dispatch")
    return {
        changeUsername: user => dispatch(changeUsername(user))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)