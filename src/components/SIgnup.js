import React from 'react';
import { NavLink, Redirect } from 'react-router-dom';
import {login, createUser} from '../services/Api'

import {onLogin} from '../actions'
import {connect} from 'react-redux'


class Signup extends React.Component{

    state=({
        newUser: {
            username: "",
            name: "",
            email: "",
            password: "",
            password_confirmation: ""
        }
    })

    handelnewUserChange=(e)=>{
        this.setState({
            newUser: {...this.state.newUser, [e.target.id]: e.target.value}  
        })
    }


    handleSubmit=(e)=>{
        e.preventDefault()
        createUser(this.state.newUser).then(res=> login(res)).then(res => {
            if (!res.error) {
              console.log(res)
              this.props.onLogin(res)
            //   this.props.history.push('/');
            } else {
                console.log("eroor")
              // this.setState({ error: true });
            }
          });
    }


    render(){
        return( this.props.userExist ? <Redirect to ='/'/> :
            <>
            <div className="ui form">
                <div className="field">
                    <label>Username</label>
                    <div className="ui left icon input">
                    <input type="text" placeholder="Username" id ="username" onChange={this.handelnewUserChange}/>
                    <i className="user icon"></i>
                    </div>
                </div>
                <div className="field">
                    <label>Name</label>
                    <div className="ui left icon input">
                    <input type="text" placeholder="Name" id ="name"  onChange={this.handelnewUserChange}/>
                    <i className="user icon"></i>
                    </div>
                </div>
                <div className="field">
                    <label>Email</label>
                    <div className="ui left icon input">
                    <input type="text" placeholder="Email" id ="email"  onChange={this.handelnewUserChange}/>
                    <i className="user icon"></i>
                    </div>
                </div>
                <div className="field">
                    <label>Password</label>
                    <div className="ui left icon input">
                        <input type="password" id ="password" onChange={this.handelnewUserChange}/>
                            <i className="lock icon"></i>
                    </div>
                </div>
                <div className="field">
                    <label>Confirm Password</label>
                    <div className="ui left icon input">
                        <input type="password" id ="password_confirmation" onChange={this.handelnewUserChange} />
                            <i className="lock icon"></i>
                    </div>
                </div>
                <div className="ui blue submit button" onClick={(e)=> this.handleSubmit(e)}>Submit</div>
                <NavLink to="/" exact > <div className="ui blue  button">Back</div> </NavLink>
            </div>
            </>
        )
    }
}
const mapStateToProps= state =>{
    return {
        username: state.username,
        userExist: state.userExist
    }
}

const mapDispatchToProps= dispatch =>{
    return {
        onLogin: resp => dispatch(onLogin(resp))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)