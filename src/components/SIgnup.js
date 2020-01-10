import React from 'react';
import { NavLink } from 'react-router-dom';


import {changeUsername} from '../actions'
import {connect} from 'react-redux'


class Signup extends React.Component{

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
            <>
            <div className="ui form">
                <div className="field">
                    <label>Username</label>
                    <div className="ui left icon input">
                    <input type="text" placeholder="Username" value={this.props.username} onChange={this.handelUsernameChange}/>
                    <i className="user icon"></i>
                    </div>
                </div>
                <div className="field">
                    <label>Password</label>
                    <div className="ui left icon input">
                        <input type="password" onChange={this.handelPasswordChange}/>
                            <i className="lock icon"></i>
                    </div>
                </div>
                <div className="field">
                    <label>Confirm Password</label>
                    <div className="ui left icon input">
                        <input type="password"/>
                            <i className="lock icon"></i>
                    </div>
                </div>
                <div className="ui blue submit button" onClick={()=> this.handleSubmit()}>Submit</div>
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