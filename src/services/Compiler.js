"use strict";

const HackerEarth = require('hackerearth-node');

const hackerEarth = new HackerEarth(
    '20df01c1563bbb5bd486f7eea7a6f470f9ef7560', //client secret key
    ''
);
const input="function hello(name) {return ('Hello, ' + name); }"
const config = {};

config.time_limit = 1;

config.memory_limit = 323244;

config.input = "";

config.language= "JAVASCRIPT";

// input,methodName,methodInput
export const api_compiler =()=>{

    const input= "function hello(arr,s,ar2) {return (arr[1]+ ' Hello, ' + ar2[1]*arr[0]+ s); }"
    const methodName="hello"
    const methodInput= "[5,3,'good'], 'yes', ['a',23]"

    config.source = input + "print("+ methodName+"("+methodInput+"))";

    hackerEarth.run(config)
                    .then((result) => {
                        // alert("result.run_status")
                        console.log("result", result)
                        return result.run_status
                        //deal with result
                    })
                    .catch((err) => {
                        console.log("HAckerEarth Compiler Catch error", err)
                        return err.run_status
                    });
} 

//  const api_compiler =()=>{

//     const input= "function hello(arr,s,ar2) {return (arr[1]+ ' Hello, ' + ar2[1]*arr[0]+ '  ' + s); }"
//     const methodName="hello"
//     const methodInput= "[5,3,'String in Array'], 'Im string ', ['a',23]"

//     config.source = input + "print("+ methodName+"("+methodInput+"))";

//     hackerEarth.run(config)
//                     .then((result) => {
//                         // alert("result.run_status")
//                         console.log("result", JSON.parse(result))
//                         return result.run_status
//                         //deal with result
//                     })
//                     .catch((err) => {
//                         console.log("this is the error ", err)
//                         return err.run_status
//                     });
// } 

// api_compiler()

