import React from 'react';
import {addMethod} from '../../services/AdminApi'
import {connect} from 'react-redux'
import NewMethod from './NewMethod'




 
class Admin extends React.Component {

  state=({
    source: {
      methodName: "",
      methodDiscription: "",
      rubyMethod: ""
    },
    testCases: [
      {input: "", output: ""},
      {input: "", output: ""},
      {input: "", output: ""},
      {input: "", output: ""}]
  })

  mapTestCases = ()=>{
    const {testCases} = this.state
    return testCases.map( (testC, index) => <tr key={index}>
                            <td data-label="Test Cases">Sample {index + 1}</td>
                            <td data-label="Input"><input type="text" name={index} placeholder='e.g. string "Nice", Number 2 , [ ] ....' onChange={this.handelInputChange}/></td>
                            <td data-label="Output"><input type="text" name={index} placeholder='e.g. string Nice, Number 2 , [ ] ....' onChange={this.handelOutputChange}/></td>
                          </tr> )
  }

  handelChange=(e)=>{
    const newSource = { ...this.state.source, [e.target.id]: e.target.value };
    this.setState({ source: newSource });
  }

  handelInputChange=(e)=>{
    let  test= this.state.testCases
    test[e.target.name].input = e.target.value
    this.setState({ testCases: test });
  }
  handelOutputChange=(e)=>{
    let  test= this.state.testCases
    test[e.target.name].output = e.target.value
    this.setState({ testCases: test });
  }
  
  handelSaveClick=()=>{
    const {source, testCases}=this.state
    addMethod(source, testCases)
  }

render(){
  return(
        <>
          <h1>Add new Ruby Methods to the Quiz</h1>
              <div className="ui form">
              <NewMethod onHandelChange={this.handelChange}/>
                </div>  
                <table className="ui celled table">
                    <thead>
                      <tr><th>Test Cases</th>
                      <th>Input</th>
                      <th>Output</th>
                    </tr></thead>
                    <tbody>
                    {this.mapTestCases()}
                    </tbody>
              </table>
               
              <div className="ui divider"></div>
                            <div>  
                              <button className="ui primary button" onClick={() => this.handelSaveClick()}>Save Code</button>
                              <button className="ui left floated button" onClick={() => this.handelResetClick()}>Reset</button>
                </div>
        </>
  )
}

}

export default Admin
