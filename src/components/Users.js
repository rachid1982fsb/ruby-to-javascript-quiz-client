import React from'react'

class Users extends React.Component {

    state=({
        usersName: [],
        userSelected: 0
    })
    render(){

        return <>
                Hello:  {this.state.userSelected}
               </>
    }
}

export default Users
