import * as contstant from '../contstants/Index'


const headers = {
    'Content-Type': 'application/json',
    Accepts: 'application/json',
    Authorization: contstant.token
};

export const login = data => {
    return fetch(contstant.AUTH_URL, {
        method: 'POST',
        headers,
        body: JSON.stringify(data)
    }).then(resp => resp.json());
};

export const getCurrentUser = () => {
    return fetch(contstant.CURRENT_USER_URL, {
      headers
    }).then(res => {
      console.log("getCurrentUser", res)
      return res.json()});
  };
  export const getCurrentUserData = (id) => {
    return fetch(contstant.URL+"/"+id, {
      headers
    }).then(res => {
      return res.json()});
  };

export const saveResult=(userId, sourceId, code)=>{
  return  fetch(contstant.URL_CORRECT_RESPONSES, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
  },
  body: JSON.stringify({
    user_id: userId,
    source_id: sourceId,
    javascript_code: code
  })
  }).then(function(resp) {
    if (Math.floor(resp.status/200) === 1) {
      console.log("saved rachid", resp)
    } else {
      console.log("ERROR", resp)
    }
  })
}

export const saveAlgorithm=(field, user_id)=>{
  return  fetch(contstant.USER_ALGORITHM_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json"
  },
  body: JSON.stringify({
    user_id: user_id,
    name: field.methodName,
    discription: field.discription,
    javascript_code: field.code
   })
  }).then(function(resp) {
    if (Math.floor(resp.status/200) === 1) {
      console.log("saved rachid", resp)
    } else {
      console.log("ERROR", resp)
    }
  })
}

export const createUser=(data)=>{
   return  fetch(contstant.URL, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({user: data})
            }).then(function(resp) {
              if (Math.floor(resp.status/200) === 1) {
                console.log(resp)
                return {username: data.username, password: data.password}
              } else {
                console.log("ERROR", resp)
              }
            })
    }

export const fetchSource=()=>{
      return fetch(contstant.URL_SOURCE,{headers})
            .then(res => res.json())
            .then(json => {return json})
          }

export const fetchTestCases=()=>{
      return fetch(contstant.URL_TESTCASES,{headers})
            .then(res => res.json())
            .then(json => {return json})
          }  

export const fetchUserAlgorithms=()=>{
    return fetch(contstant.USER_ALGORITHM_URL,{headers})
         .then(res => res.json())
          } 

export const fetchCorrectResponses=()=>{
   return fetch(contstant.URL_CORRECT_RESPONSES,{headers})
        .then(res => res.json())
          }  

export const fetchCompiler=(inCode)=>{
      const headers = { "Content-type": "application/x-www-form-urlencoded"}
      let formBody = [];
      let params={
        js_code: inCode,
        compilation_level: 'WHITESPACE_ONLY',
        output_format: 'json',
        output_info:  'compiled_code'
         }
      for (let property in params) {
              let encodedKey = encodeURIComponent(property);
              let encodedValue = encodeURIComponent(params[property]);
              formBody.push(encodedKey + "=" + encodedValue);
        }
    return fetch('https://closure-compiler.appspot.com/compile', {method: "POST", headers: headers, body: formBody.join('&')} )
                .then(res => res.json())
                .then(json => {
                      return  json.compiledCode})
    }




export const editAlgorithm=(newAlgo)=>{
   return  fetch(contstant.USER_ALGORITHM_URL+"/"+newAlgo.id, {
              method: "PUT",
              headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({user_algorithm: newAlgo})
            }).then(function(resp) {
              if (Math.floor(resp.status/200) === 1) {
                console.log("Algorithm Edited ",resp)
                return resp
              } else {
                console.log("ERROR", resp)
              }
            })
    }
    
    export const deleteAlgorithm=(id)=>{
      return  fetch(contstant.USER_ALGORITHM_URL+"/"+id, {
                 method: "DELETE",
                 headers: {
                   "Content-Type": "application/json",
                   Accept: "application/json"
               }
               }).then(function(resp) {
                 if (Math.floor(resp.status/200) === 1) {
                   console.log("Algorithm Edited ",resp)
                   return resp
                 } else {
                   console.log("ERROR", resp)
                 }
               })
       }



