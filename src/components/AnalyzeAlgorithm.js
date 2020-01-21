import React from 'react';
import {fetchCompiler, saveAlgorithm} from '../services/Api'
import {connect} from 'react-redux'


 
class AnalyzeAlgorithm extends React.Component {


  state=({
    fields: {
      methodName: "",
      discription: "",
      code: "",
      compiledCode: "",
      result: ""
    }
})


handelChange=(e)=>{
    const newFields = { ...this.state.fields, [e.target.id]: e.target.value };
    this.setState({ fields: newFields });
}


runCode=()=>{
  const {code} = this.state.fields
  let func 
  let funcError=""
  // let func = eval(compiledCode);
  try {
     func = eval(code);
  } catch (e) {
    console.log("error",e)
    funcError = e;
  }
  // console.log("func",func)
  let result = func ? func : funcError
  const newFields = { ...this.state.fields, result: result};
  this.setState({
    fields: newFields
  })
}

handleRunClick=(code)=>{
  this.runCode() 
  // console.log(code)
  // fetchCompiler(code)
  // .then(res => { 
  //   const newFields = { ...this.state.fields, compiledCode: res};
  //   this.setState({
  //     fields: newFields
  //               })
  //           return this.state.fields.compiledCode
  //       })
  // .then(()=> {
  //   return this.runCode() 
  // })
}


handelSaveClick=()=>{
  console.log("save clicked")
  const {currentUser}= this.props
  if(currentUser.id){
    saveAlgorithm(this.state.fields, currentUser.id)
  }else{
    alert("you can't save, check your login ")
  }
}


  render() {
    const {code, result} = this.state.fields
    return <>
    <h1>Run and Save your Algorithm</h1>
    <div class="ui form">
    <div class="field">
      <label>Method Name:</label>
      <input type="text" placeholder="Method Name" id="methodName"  onChange={this.handelChange}/>
    </div>
  <div class="field">
    <label>Method Discription:</label>
    <textarea placeholder="Method Discription:" id="discription"  onChange={this.handelChange}></textarea>
  </div>
  <div className="ui grid">
                <div class="ui form eight wide column">
                  <div class="field">
                    <label>Write JAVASCRIPT Code Here.</label>
                    <textarea rows="20" placeholder="Write your code here... "  id="code"  onChange={this.handelChange} />
                  </div>
                </div>
                <div class="ui form six wide column">
                    <div class="field">
                      <label>Code Output</label>
                      <textarea rows="20" placeholder="Code Output:..." value= {result}  readOnly={true}></textarea>
                    </div>
                </div>
                </div>
</div>
<div class="ui divider"></div>
              <div>  
                <button class="ui primary button" onClick={() => this.handelSaveClick()}>Save Code</button>
                <button class="ui left floated button" >Reset</button>
                <button class="ui right floated primary button" onClick={() => this.handleRunClick(code)}> Run Code </button>

  </div>
    </>
  }
}
 

const mapStateToProps= state =>{
  return {
      currentUser: state.currentUser
  }
}


export default connect(mapStateToProps)(AnalyzeAlgorithm)
