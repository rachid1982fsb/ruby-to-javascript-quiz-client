import React from 'react';
import {addMethod} from '../../services/AdminApi'
import {connect} from 'react-redux'
import NewMethod from './NewMethod'
import InputOutput from './InputOutput'

 
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
    return testCases.map( (testC, index) => <InputOutput key={index} index={index} onHandelInput={this.handelInputChange} onHandelOutput={this.handelOutputChange} testCase={testC}/>)
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
  
  handelResetClick=()=>{
    console.log("rest")
    this.setState({
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
  }

  handelSaveClick=()=>{
    const {source, testCases}=this.state
    addMethod(source, testCases).then(res => {
        alert("The Method successfully saved", res)
        this.handelResetClick()
    })
  }

mapSources=()=>{
  return this.props.source.map( (method,index) => <option key={index} value={method.id}>{method.method_name}</option> )
}

  handelSelect=(event)=>{
    console.log(event.target.value)
    const method = this.props.source.find(method=> method.id == event.target.value)
    const testCases = this.props.testCases.filter(test=> test.source_id == event.target.value)
    this.setState({
      testCases: testCases
    })

    this.setState({
      source: {
        methodName: method.method_name,
        methodDiscription: method.method_discription,
        rubyMethod: method.ruby_method
      }
    })
  }

render(){
  const {source, testCases} = this.state
  return(
        <>
          <h1>Add new Ruby Methods to the Quiz</h1>
          <div className="ui grid">
          <div className="ten wide column"></div>
            <div  className="six wide column">
            <select className="ui search dropdown" onChange={this.handelSelect} >
              <option value="">Select Method</option> 
              {this.mapSources()}
            </select>
            <button className="ui floated button" onClick={() => this.handelResetClick()}> Edit </button>
          </div>
          </div>
              <div className="ui form">
              <NewMethod onHandelChange={this.handelChange} source={source}/>
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

const mapStateToProps= state =>{
  return {
      source: state.source,
      testCases: state.testCases
  }
}


export default connect(mapStateToProps)(Admin)
