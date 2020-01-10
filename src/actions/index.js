

export const changeUsername =(username)=>{
    console.log(username)
    return {
        type: "CHANGE_USERNAME",
        payload: username
    }
}