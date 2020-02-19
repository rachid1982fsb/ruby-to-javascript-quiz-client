


export const logout =()=>{
    console.log("remove Token")
    localStorage.removeItem('token');
    window.location.replace("http://127.0.0.1:3000/")
    return {
        type: "LOGOUT",
        payload: {}
    }
}
export const onLogin =(data)=>{
    localStorage.setItem('token', data.jwt);
    return {
        type: "LOGIN",
        payload: data
    }
}

export const setSources =(source) =>{
    return{
        type: "SET_SOURCE",
        payload: source
    }
}

export const setTestCases =(testCases) =>{
    return{
        type: "SET_TEST_CASES",
        payload: testCases
    }
}

export const setCorrectResponses =(correctResponses) =>{
    return{
        type: "SET_CORRECT_RESPONSES",
        payload: correctResponses
    }
}

export const setUserAlgorithms =(userAlgorithms) =>{
    return{
        type: "SET_USER_ALGORITHMS",
        payload: userAlgorithms
    }
}

