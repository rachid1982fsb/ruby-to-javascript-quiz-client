import React from 'react';



const SampleTest=(props)=>{

    const mapTestCases=()=>{
        return props.testCases.map(test =>  <div> {"Test Cases Input: " + test.input + "    Test Cases Output: " + test.output} </div >)
    }

    return(
        <div class="ui card">
                <lable>Sample Tests</lable>
                  <div class="">
                  {mapTestCases()}
                    <p src="" alt="HTML5" style={{width:"200px", height:"200px", borderRadius: 20, padding: 5}}/>
                  </div>
        </div>
       )
}


export default SampleTest