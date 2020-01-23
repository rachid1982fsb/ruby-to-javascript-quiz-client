import React from 'react';



const SampleTest=(props)=>{

    const mapTestCases=()=>{
    return props.testCases.map((test, index) =>  <div key ={index} > Test Cases Input =>  <span style={{fontWeight: 'bold'}}>{test.input}</span>  Output <i class="angle double right icon"></i>  // <span style={{fontWeight: 'bold'}} >{test.output}</span> </div >)
    }

    return(
      <div class="ui raised very padded text container segment">
                 <label style={{fontWeight: 'bold'}}>Sample Tests<i className="angle double down icon"></i></label>
                  <div>
                  {mapTestCases()}
                  <p src="" alt="HTML5" style={{width:"400px", height:"200px", borderRadius: 20, padding: 5}}/>
                  </div>
        </div>
       )
}


export default SampleTest