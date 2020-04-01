import React from'react'
import {users} from '../services/AdminApi'
import UsersC from '../components/Users'


class Users extends React.Component {

    state=({
        users: []
    })

    populateState=()=>{
        users().then( resp => {
                this.setState({
                    users: resp 
                })
            }
        )
    }

    UNSAFE_componentWillMount(){
        this.populateState() 
      }


    render(){
        
        return <UsersC usersInfo={this.state.users}/>
    }
}
export default Users
