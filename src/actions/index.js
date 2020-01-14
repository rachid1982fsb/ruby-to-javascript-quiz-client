

export const changeUsername =(currentUser)=>{
    console.log(currentUser)
    return {
        type: "CHANGE_USERNAME",
        payload: currentUser
    }
}
export const logout =()=>{
    localStorage.removeItem('token');
    return {
        type: "LOGOUT",
        payload: {}
    }
}

