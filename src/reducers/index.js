const reducer = (state, action) =>{
    console.log("reducer HERe", action.type)
   
    switch(action.type){
        case "CHANGE_USERNAME":
            return{
                username: action.payload
            }
        default:
            return state
    }
}
export default reducer