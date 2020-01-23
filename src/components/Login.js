import React from 'react';
import {onLogin, setCorrectResponses,setUserAlgorithms} from '../actions'
import {connect} from 'react-redux'
import { NavLink } from 'react-router-dom';

import {login,fetchCorrectResponses,fetchUserAlgorithms,getCurrentUserData} from '../services/Api'



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
            getCurrentUserData(res.id).then((user)=> {
                user.jwt=res.jwt
                this.props.onLogin(user)
                console.log(user)})
            // getCurrentUserData()
            fetchUserAlgorithms().then(res => this.props.setUserAlgorithms(res)).then(() => fetchCorrectResponses()).then(res => this.props.setCorrectResponses(res))
            // this.props.history.push('/');
          } else {
              alert("The username or password is incorrect. try again")
            // this.setState({ error: true });
          }
        });
      };
 
       //   handelLoginClick = e => {
    //     e.preventDefault();
    //     login(this.state.fields).then(res => {
    //       if (!res.error) {
    //         getCurrentUserData().then((userData)=>{
    //             userData.jwt= res.jwt
    //             console.log(userData)
    //             this.props.onLogin(userData)
    //         }) 
    //         // getCurrentUserData()
    //         fetchUserAlgorithms().then(res => this.props.setUserAlgorithms(res)).then(() => fetchCorrectResponses()).then(res => this.props.setCorrectResponses(res))
    //         // this.props.history.push('/');
    //       } else {
    //           console.log("eroor")
    //         // this.setState({ error: true });
    //       }
    //     });
    //   };
 

    // handelLoginClick=()=>{
    //     this.props.changeUsername(this.state.username)
    // }

    onHandleSignupClick=()=>{
        return <a href="/signup"></a>
    }

    render(){
            return(
                <div>  
                    <div class="ui grid">
                    <div class="three column row">
                        <div class="column"></div>
                        <div class="column"><img src="https://memorycardgame.s3.amazonaws.com/images/Screen%20Shot%202020-01-22%20at%203.45.56%20PM.png" alt="" style={{width:"300px", height:"200px" , borderRadius: 20, padding: 5}} /></div>
                        <div class="column"></div>
                    </div> 
                    </div>               
                
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
        currentUser: state.currentUser
    }
}

const mapDispatchToProps= dispatch =>{
    return {
        onLogin: resp => dispatch(onLogin(resp)),
        setCorrectResponses: resp => dispatch(setCorrectResponses(resp)),
        setUserAlgorithms: resp => dispatch(setUserAlgorithms(resp))   
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)