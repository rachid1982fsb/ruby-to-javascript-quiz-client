import React from 'react';



const SampleTest=(props)=>{

    const mapTestCases=()=>{
        return props.testCases.map(test =>  <div> {"Test Cases Input: " + test.input + "  Output: " + test.output} </div >)
    }

    return(
        <div class="ui eight wide column">
                <h5>Sample Tests</h5>
                  <div>
                  {mapTestCases()}
                  <p src="" alt="HTML5" style={{width:"400px", height:"200px", borderRadius: 20, padding: 5}}/>
                  </div>
        </div>
       )
}


export default SampleTest