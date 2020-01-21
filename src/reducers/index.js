const reducer = (state, action) =>{
    console.log("reducer Here", action.type)
   
    switch(action.type){
        case "LOGOUT":
            return {
                ...state, currentUser: action.payload,
                          correctResponses: action.payload,
                          userExist: false
             }
        case "LOGIN":
            return{
                ...state, currentUser: action.payload,
                            userExist: true
             }
        case "SET_TEST_CASES":
            return{
                ...state, testCases: action.payload
                
            }
        case "SET_SOURCE":
            return{
                ...state , source: action.payload
            }
        case "SET_CORRECT_RESPONSES":
            return{
                ...state , correctResponses: action.payload
            } 
        case "SET_USER_ALGORITHMS":
            return{
                ...state , userAlgorithms: action.payload
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