import * as contstant from '../contstants/Index'


export const addMethod=(source,testCases)=>{
    return  fetch(contstant.URL_SOURCE, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json"
    },
    body: JSON.stringify({
      method_name: source.methodName,
      method_discription: source.methodDiscription,
      ruby_method: source.rubyMethod,
      test_cases_attributes: testCases
     })
    }).then(function(resp) {
      if (Math.floor(resp.status/200) === 1) {
        console.log("saved rachid", resp)
      } else {
        console.log("ERROR", resp)
      }
    })
  }