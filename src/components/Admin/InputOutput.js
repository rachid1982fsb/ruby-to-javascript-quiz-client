import React from 'react';



const InputOutput=(props)=> {

    const {index,onHandelInput, onHandelOutput, testCase} = props

    const  handelInputChange=(e)=>{
                onHandelInput(e)
         }

    const handelOutputChange=(e)=>{
                onHandelOutput(e)
            }

 
        return(<tr >
            <td data-label="Test Cases">Sample {index + 1}</td>
            <td data-label="Input"><input type="text" name={index} placeholder='e.g. string "Nice", Number 2 , [ ] ....' onChange={handelInputChange} value={testCase.input} /></td>
             <td data-label="Output"><input type="text" name={index} placeholder='e.g. string Nice, Number 2 , [ ] ....' onChange={handelOutputChange} value={testCase.output}/></td>
          </tr> )

}

export default InputOutput