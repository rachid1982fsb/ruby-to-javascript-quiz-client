

export const changeUsername =(currentUser)=>{
    console.log(currentUser)
    return {
        type: "CHANGE_USERNAME",
        payload: currentUser
    }
}