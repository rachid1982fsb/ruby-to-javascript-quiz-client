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
      return res.json()});
  };

  
export const createUser=(data)=>{
    console.log(data)
    fetch(contstant.URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
      },
      body: JSON.stringify({user: data})
      }).then(function(resp) {
        if (Math.floor(resp.status/200) === 1) {
          console.log("Great ")
        } else {
          console.log("ERROR", resp)
        }
      })
    }






// const signup = data => {
//     return fetch(`${API_ROOT}/users`, {
//         method: 'POST',
//         headers,
//         body: JSON.stringify(data)
//     })
//         .then(resp => resp.json());
// }

// const getCurrentUser = () => {
//     return fetch(`${API_ROOT}/current_user`, {
//         headers
//     })
//         .then(resp => {
//             return resp.json();
//         });
// };
