import React from'react'
import {users} from '../services/AdminApi'

class Users extends React.Component {

    state=({
        usersName: [],
        userSelected: 0
    })
    componentDidMount(){
        users().then( users => this.setState({
            usersName: users
        }) )
        console.log("Now", users())
        console.log("Now", this.state.usersName)
    }

    render(){

        return <>
                Hello:  {this.state.usersName[0].username}
               </>
    }
}

export default Users
