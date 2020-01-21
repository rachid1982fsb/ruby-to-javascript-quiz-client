import * as contstant from '../contstants/Index'


export const addMethod=(field)=>{
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
  