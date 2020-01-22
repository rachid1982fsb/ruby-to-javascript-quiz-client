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


  handelChange=(e)=>{
    console.log(e.target.value)
    const newSource = { ...this.state.source, [e.target.id]: e.target.value };
    this.setState({ source: newSource });
  }

  handelInputChange=(e)=>{
    console.log(e.target.value)
    let  test= this.state.testCases
    test[e.target.name].input = e.target.value
    this.setState({ testCases: test });
  }
  handelOutputChange=(e)=>{
    console.log(e.target.value)
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
                <table class="ui celled table">
                    <thead>
                      <tr><th>Test Cases</th>
                      <th>Input</th>
                      <th>Output</th>
                    </tr></thead>
                    <tbody>
                      <tr>
                        <td data-label="Test Cases">Sample 1</td>
                        <td data-label="Input"><input type="text" name="0"  placeholder='e.g. string "Nice", Number 2 , [ ] ....' onChange={this.handelInputChange}/></td>
                        <td data-label="Output"><input type="text" name="0" placeholder='e.g. string Nice, Number 2 , [ ] ....' onChange={this.handelOutputChange}/></td>
                      </tr>
                      <tr>
                        <td data-label="Test Cases">Sample 2</td>
                        <td data-label="Input"><input type="text" name="1"  placeholder='e.g. string "Nice", Number 2 , [ ] ....' onChange={this.handelInputChange}/></td>
                        <td data-label="Output"><input type="text" name="1" placeholder='e.g. string Nice, Number 2 , [ ] ....' onChange={this.handelOutputChange}/></td>
                      </tr>
                      <tr>
                        <td data-label="Test Cases">Sample 3</td>
                        <td data-label="Input"><input type="text" name="2"  placeholder='e.g. string "Nice", Number 2 , [ ] ....' onChange={this.handelInputChange}/></td>
                        <td data-label="Output"><input type="text" name="2" placeholder='e.g. string Nice, Number 2 , [ ] ....' onChange={this.handelOutputChange}/></td>
                      </tr>
                      <tr>
                        <td data-label="Test Cases">Sample 4</td>
                        <td data-label="Input"><input type="text" name="3"  placeholder='e.g. string "Nice", Number 2 , [ ] ....' onChange={this.handelInputChange}/></td>
                        <td data-label="Output"><input type="text" name="3" placeholder='e.g. string Nice, Number 2 , [ ] ....' onChange={this.handelOutputChange}/></td>
                      </tr>
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
