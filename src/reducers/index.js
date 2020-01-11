const reducer = (state, action) =>{
    console.log("reducer HERe", action.type)
   
    switch(action.type){
        case "CHANGE_USERNAME":
            return{
                currentUser: action.payload
            }
        default:
            return state
    }
}
export default reducer

// login = data => {
//     const updatedState = { ...this.state.auth, user: data };
//     localStorage.setItem('token', data.jwt);
//     this.setState({ auth: updatedState });  
//   };

//   logout = () => {
//     localStorage.removeItem('token');
//     this.setState({ auth: { user: {} } });
//   };