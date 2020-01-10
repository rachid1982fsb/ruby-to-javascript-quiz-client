import React from 'react';
import {changeUsername} from '../actions'
import {connect} from 'react-redux'


class Login extends React.Component{

    state=({
        username: "ne",
        password: ""
    })

    handelUsernameChange=(e)=>{
        this.setState({
            username: e.target.value

        })
    }


    handelLoginClick=()=>{
        this.props.changeUsername(this.state.username)
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
                                            <input type="text" placeholder="Username"   onChange={this.handelUsernameChange}/>
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
                                        <input type="password"/>
                                        <i className="lock icon"></i>
                                    </div>
                                </div>
                                <div className="ui blue submit button" onClick={()=> this.handelLoginClick() }>Login</div>
                            </div>
                        </div>
                        <div className="middle aligned column">
                        <div className="ui big button" >
                            <i className="signup icon"></i>
                            Sign Up
                        </div><br/>
                        <div className="ui big button" >
                            Play As Guest
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
        username: state.username
    }
}

const mapDispatchToProps= dispatch =>{
    console.log("dispatch")
    return {
        changeUsername: username => dispatch(changeUsername(username))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)