import React from'react'
// import {users} from '../services/AdminApi'

class UsersC extends React.Component {
   

    state=({
        users: ["dsa"],
        userSelected: 0
    })    

    static getDerivedStateFromProps(props, state){
        return {users: props.usersInfo}
    }

    mapUsers=()=>{
        return this.state.users.map( user => <tr key={user.id} className="">
                                                <td className="">{user.username}</td>
                                                <td className="">{user.name}</td>
                                                <td className="">{user.email}</td>
                                             </tr>
                                               
                )
    }



    render(){

        return <>
                <h1>Users Information : </h1><br/>

                <table className="ui single line table">
                    <thead className="">
                        <tr className="">
                            <th className="">User Name</th>
                            <th className="">Name</th>
                            <th className="">E-mail address</th>
                        </tr>
                    </thead>

                    <tbody className="">
                        {this.mapUsers()}
                    </tbody>
                    
                </table>
               </>
    }
}

export default UsersC
