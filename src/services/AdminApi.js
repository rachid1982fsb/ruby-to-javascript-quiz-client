import * as contstant from '../contstants/Index'

const headers = {
  'Content-Type': 'application/json',
  Accepts: 'application/json'
};

export const addMethod=(source,testCases)=>{
    return  fetch(contstant.URL_SOURCE, {
      method: "POST",
      headers,
    body: JSON.stringify({
      method_name: source.methodName,
      method_discription: source.methodDiscription,
      ruby_method: source.rubyMethod,
      test_cases_attributes: testCases
     })
    }).then(function(resp) {
      if (Math.floor(resp.status/200) === 1) {
        console.log("saved rachid", resp)
        return resp
      } else {
        console.log("ERROR", resp)
      }
    })
  }
  export const users = () => {
    return fetch(contstant.URL, {
      headers
    }).then(res => {
      console.log("User", res)
      return res.json()});
  };