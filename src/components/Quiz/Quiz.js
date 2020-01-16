import React from 'react';
import {connect} from 'react-redux'
import SampleTest from './SampleTest'
import RubyMethod from './RubyMethod'







class Quiz extends React.Component {

  state=({
    inputCode: ""
  })


  handleChange=(e)=>{
    this.setState({
      inputCode: e.target.value
    })
  }

  handelResetClick=()=>{
    this.setState({
      inputCode: ""
    })
    this.props.onSetResult()
  }

  handelNextClick=()=>{
    this.handelResetClick()
    this.props.onNextClick()
  }


  render() {
      const {source, testCases, onRunClick} = this.props
      const {inputCode} = this.state
      const {username} = this.props.currentUser
      console.log(source)
      console.log(testCases[0])
return  <>
              <h2 className="ui center aligned header"> Ruby to javascript Quiz </h2><br></br>
              <div className="ui message">
                  <div className="header">
                  Method Name: {source.method_name}
                  </div>
                  <p>Method Discription: {source.method_discription}</p>
              </div>
             
              <div className="ui grid">
                <div className="ten wide column"><RubyMethod  url={source.ruby_method}/></div>
                <div className="six wide column"><SampleTest  testCases={testCases}/></div>
              </div>
              <div className="ui grid">
                <div className="six wide column">
                  <label>JAVASCRIPT Code Here </label>
                  <div className="ui input">
                    <textarea type="text" cols="70" rows="15" placeholder="Write your code here... "  onChange={this.handleChange} value={this.state.inputCode}/>
                  </div>
                </div>
                <button onClick={() => onRunClick(inputCode)}> >>  Run >>  </button>
                <div className="six wide column">
                  <label>The Method Output</label>
                  <div className="ui input">
                    <textarea type="text" cols="70" rows="15"  value ={"Your Code Output: "+this.props.result} readOnly={true}/>
                  </div>
                </div>
              </div>
              <div>  
                <button onClick={() => this.props.onSubmitClick(inputCode)}>  Submit  >>  </button>
                <button onClick={() => this.handelResetClick()}>  Reset >>  </button>
                <button onClick={() => this.handelNextClick()}>   Next >>  </button> 
              </div>
            </>
  }

}
 

const mapStateToProps= state =>{
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(Quiz)


// <div class="ui clearing segment">
// <h3 class="ui left floated header">
//   Ruby to javascript Quiz 
// </h3>
// </div>
{/* <div class="ui message">
<div class="header">
Method Name: 
</div>
<p>Method Discription:</p>
</div> */}

// <div class="ui section divider"></div>

// <p> CompiledCode: {this.props.compiledCode}</p>
// <div>
// <lable>Ruby Method</lable>
//   <div class="ui card">
//     <div class="image">
//       <textarea name="js_code" cols="100" rows="15" > </textarea>
//       <img src="/images/avatar2/large/kristy.png"/>
//     </div>
//   </div>
// <textarea name="js_code" cols="100" rows="15"></textarea>
// <lable>The Method Output</lable>
// <textarea name="js_code" cols="70" rows="15" value ={this.props.result}> Result</textarea ><br></br>
// </div>
// <div>


// import React from 'react';
// import {connect} from 'react-redux'
// import {fetchCompiler} from '../services/Api'



// class Quiz extends React.Component {

//   state=({
//     compiledCode: "",
//     inputCode: "",
//     methodInput:[1,3,5,6]
//   })

  
//   fetchCode= (inCode)=>{
//     fetchCompiler(inCode)
//     .then(res => { this.setState({
//                   compiledCode: res
//                   })
//                 console.log(this.state.compiledCode)
//               return this.state.compiledCode
//           })
//     .then(()=> this.handleRunClick() )
//   }

 

//   handleChange=(e)=>{
//     this.setState({
//       inputCode: e.target.value
//     })
//   }


//   runCode=()=>{
//     let func = new Function("return " + this.state.compiledCode)();
//     let result = func(this.state.methodInput)
//     console.log(result)
//   }
  

//   handleClick=()=>{
//     this.fetchCode(this.state.inputCode)
//   }

//   handleRunClick=()=>{
//     this.runCode(this.state.methodInput)
//   }

 

//   render() {
//       const {username} = this.props.currentUser
//     return  <>
//             <p> CompiledCode: {this.state.compiledCode}</p>
//             <textarea name="js_code" cols="50" rows="5" id="method" onChange={this.handleChange}></textarea >
//             <button onClick={this.handleClick}>Run</button>
//             <h1>This is my Quiz component! Hello: {username}</h1>
//             </>
//   }



// }
 

// const mapStateToProps= state =>{
//   return {
//     currentUser: state.currentUser
//   }
// }

// export default connect(mapStateToProps)(Quiz)


// fetchTest=()=>{
//   fetch(URL, {method: 'post',
//        headers: headers,
//       //  client_secret: CLIENT_SECRET, 
//        bady: Data
//     }).then(data => console.log(data))
//   }

// import axios from 'axios'


// const URL="http://api.hackerearth.com/code/compile/"
// const headers = { "content-type" : "application/json; charset=UTF-8"}
// const CLIENT_SECRET ="20df01c1563bbb5bd486f7eea7a6f470f9ef7560"
// const source= "console.log('Rachid Here')"
// const Data={
//     'client_secret': CLIENT_SECRET,
//     'source': source,
//     'lang': "JAVASCRIPT"
// }
// fetchTest=()=>{
//   axios({method: 'post',
//        url: URL,
//        headers: headers,
//        client_secret: CLIENT_SECRET, 
//        data: JSON.stringify(Data)
//     }).then(data => console.log(data))
//   }