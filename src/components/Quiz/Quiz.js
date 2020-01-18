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
    this.props.onSetResult()
  }

  render() {
      const {source, testCases, onRunClick} = this.props
      const {inputCode} = this.state
      const {username} = this.props.currentUser
    
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
                <div class="ui form eight wide column">
                  <div class="field">
                    <label>Write JAVASCRIPT Code Here. use the method name:"{source.name}"</label>
                    <textarea rows="20" placeholder="Write your code here... "  onChange={this.handleChange} defaultValue={"function "+source.name+"()"} value={this.state.inputCode}/>
                  </div>
                </div>
                <div class="ui form six wide column">
                    <div class="field">
                      <label>The Method Output</label>
                      <textarea rows="20" placeholder="Code Output:..." value ={this.props.result} readOnly={true}>{this.props.result} </textarea>
                    </div>
                </div>
                </div>
              
              <div class="ui divider"></div>
              <div>  
                <button class="ui primary button" onClick={() => this.props.onSubmitClick(inputCode)}>Submit Code</button>
                <button class="ui left floated button" onClick={() => this.handelResetClick()}>Reset</button>
                <button class="ui right labeled icon right floated button" onClick={() => this.handelNextClick()}><i class="right arrow icon"></i> Next</button>
                <button class="ui right floated primary button" onClick={() => onRunClick(inputCode)}> Run Code </button>

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