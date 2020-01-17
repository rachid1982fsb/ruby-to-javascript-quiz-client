import React from 'react';
import {fetchCompiler, fetchSource, fetchTestCases} from '../services/Api'
import QuizComponent from '../components/Quiz/Quiz'
import {connect} from 'react-redux'
import {api_compiler}  from '../services/Compiler'
import * as contstant from '../contstants/Index'




class Quiz extends React.Component {

  state=({
    qustion: 0,
    testCases: [],
    source: {},
    compiledCode: "",
    methodInput: [1,3,5,6],
    methodName: "test",
    run_status: {},
    methodOutput: [3.5,4],
    result: "",
    testResult:"",
    testsResult: []
  })

  UNSAFE_componentWillMount(){
    this.populateState()
  }

  setResult= ()=>{
    this.setState({
      result: ""
    })
  }

  handelNextClick=()=>{
     if(this.state.qustion < 5){
       this.populateState()
     }
  }

  populateState=()=>{
    const {source, testCases}=this.props
    const {qustion} = this.state
    let nextQustion = qustion + 1
    this.setState({
        // methodInput: contstant.testInOutput[5].input,
        // methodOutput: contstant.testInOutput[5].output,
        qustion: nextQustion,
        source: source.find(oneCode => oneCode.id === nextQustion),
        testCases: testCases.filter(testCase => testCase.source_id === nextQustion)
         })
  }

  handleSubmit=(inCode)=>{
    const {result, methodOutput, testsResult, methodInput} = this.state
    // let test =[3.5,4]
    // let input=testCases.map(test => test.input )
    // let output=testCases.map(test => test.output )
    // console.log(input,output)
    this.handleClick(inCode)
    // for(let i=0; i<4; i++){
    //   testsResult.push(this.runCode(input[i].split(",")))
      if(result.toString() === methodOutput.toString() ){
        return this.setState({testResult: "Test Pass"})
      }
    // }
    this.setState({testResult: "Test Fail"})
  } 

  // testCases[0].output
  fetchCode= (inCode="function ")=>{
    const {methodName, methodInput}= this.state
    // inCode, methodName, methodInput
    console.log( api_compiler())
    // .then(res => { this.setState({
    //         run_status: res
    //               })
    //             console.log(this.state.run_status)
    //           return this.state.run_status
    //       })
    // .then(()=> {
    //   return this.runCode(this.state.methodInput) 
    // })
  }

  runCode=(methodInput)=>{
    const {compiledCode} = this.state
    // console.log(compiledCode)
    let func = new Function("return " + compiledCode)();
    let result = compiledCode ? func(methodInput) : "Compiled Error"
    this.setState({
        result: result
    })
    console.log(this.state.result)
    return this.state.result
  }

  
  handleClick=(inCode)=>{
    return this.fetchCode(inCode)
  }

  render() {
      const {compiledCode, result, source, testCases,testResult}=this.state
      return  <>
                
                <QuizComponent onRunClick={this.handleClick} compiledCode={compiledCode} result={result} source={source} testCases={testCases} onSetResult={this.setResult} onSubmitClick={this.handleSubmit} onNextClick={this.handelNextClick}/>
                <h2>{"Test Result:  "+ testResult}</h2>
              </>
        }

}
 

const mapStateToProps= state =>{
  return {
      currentUser: state.currentUser,
      source: state.source,
      testCases: state.testCases
  }
}


export default connect(mapStateToProps)(Quiz)