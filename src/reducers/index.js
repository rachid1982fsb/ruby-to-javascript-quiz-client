const reducer = (state, action) =>{
    switch(action.type){
        case "CHANGE_USERNAME":
            return{
                username: action.username
            }
        default:
            return state
    }
}
export default reducer