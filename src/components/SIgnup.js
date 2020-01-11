import React from 'react';
import { NavLink } from 'react-router-dom';
import {createUser} from '../services/Api'

import {changeUsername} from '../actions'
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
        createUser(this.state.newUser)
    }


    render(){
        return(
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
        username: state.username
    }
}

const mapDispatchToProps= dispatch =>{
    return {
        changeUsername: username => dispatch(changeUsername(username))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Signup)