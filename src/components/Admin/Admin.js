import React from 'react';
import {addMethod} from '../../services/AdminApi'
import {connect} from 'react-redux'
import NewMethod from './NewMethod'
import InputOutput from './InputOutput'

 
class Admin extends React.Component {

  state=({
    edit: false,
    source: {
      id: null,
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
    this.setState({
      edit: false,
      source: {
        id: null,
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
    if(event.target.value){
      const method = this.props.source.find(method=> method.id == event.target.value)
      const testCases = this.props.testCases.filter(test=> test.source_id == event.target.value)
      this.setState({
        edit: true,
        testCases: testCases,
        source: {
          id: method.id,
          methodName: method.method_name,
          methodDiscription: method.method_discription,
          rubyMethod: method.ruby_method
        }
      })
    }else{
      this.handelResetClick()
    }
  }

render(){
  const {source, testCases,edit} = this.state
  return(
        <>
          <h1>Add new Ruby Methods to the Quiz</h1>
          <div className="ui grid">
          <div className="ten wide column"></div>
            <div  className="six wide column">
            <div className="ui label">
              <i className="edit icon"></i>
            
              <a className="detail">Select Method to Edit</a>
            </div>
            <select className="ui search dropdown" onChange={this.handelSelect} >
              <option value="">Select Method</option> 
              {this.mapSources()}
            </select>
            
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
                              {edit ? <button className="ui right labeled icon right floated button" ><i className="edit icon"></i>Edit</button>
                                      : null}
                              {edit ? <button className="ui right labeled icon right floated button" ><i className="trash alternate icon"></i> Delete</button>
                                      : null}
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


// class ComponentName extends React.Component {

//   constructor(props) {
//     super(props);
//     this.state = {firstState: "state value"};
//   }

//   static getDerivedStateFromProps(props, state) {
//     return {firstState: props.firstProps };
//   }

//   render() {
//     return (
//       <h1>Print out the state value: {this.state.firstState}</h1>
//     );
//   }
// }

// export default ComponentName
