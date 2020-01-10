

export const changeUsername =(username)=>{
    return {
        type: "CHANGE_USERNAME",
        payload: {username: username}
    }
}