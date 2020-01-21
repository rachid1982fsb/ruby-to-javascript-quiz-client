import React from 'react';
import {fetchCompiler, saveResult} from '../services/Api'
import QuizComponent from '../components/Quiz/Quiz'
import {connect} from 'react-redux'
import {api_compiler}  from '../services/Compiler'
import * as contstant from '../contstants/Index'




class Quiz extends React.Component {

  state=({
    qustion: -1,
    testCases: [],
    source: {},
    compiledCode: "",
    methodName: "test",
    run_status: {},
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
    const numberOfQustions = this.remainQuestions().length -1
     if(this.state.qustion < numberOfQustions){
       this.populateState()
     }
  }

  remainQuestions=()=>{
    const {currentUser, source, correctResponses}= this.props
    let array=[]
    const qustions = source.map(qustion => qustion.id )
    let answered =[]
    if(currentUser.id){
       correctResponses.forEach(qustion => {
            if(qustion.user_id === currentUser.id){
              answered.push(qustion.source.id)
            }}
          )
      console.log("answered", answered)
      qustions.forEach(q => {
        if(!answered.includes(q)){
          array.push(q)
        }
      } )
    }else{
      array = qustions
    }
    return array
  }


  populateState=()=>{
    const {source, testCases}=this.props
    const {qustion} = this.state
    let nextQustion = this.remainQuestions()[qustion + 1]
    this.setState({
        // methodInput: contstant.testInOutput[5].input,
        // methodOutput: contstant.testInOutput[5].output,
        qustion: qustion + 1,
        source: source.find(oneCode => oneCode.id === nextQustion),
        testCases: testCases.filter(testCase => testCase.source_id === nextQustion)
         })
  }

  handleSubmit=(inCode)=>{
    const {result, methodOutput, testsResult, methodInput,testCases, source} = this.state
    const {currentUser}= this.props
    // let input=testCases.map(test => test.input )
    // let output=testCases.map(test => test.output )
    // console.log(input,output)
    this.handleClick(inCode)
    // for(let i=0; i<4; i++){
    //   testsResult.push(this.runCode(input[i].split(",")))
    if(result.toString() === testCases[0].output.toString() ){
        this.setState({testResult: "Test Pass"})
       if (currentUser.id ){
         console.log("will save")
         saveResult(currentUser.id, source.id,inCode)
       }
      }else{
        this.setState({testResult: "Test Fail"})
      }
    // }
    
  } 

  // testCases[0].output
  fetchCode= (inCode="function ")=>{
    
    const {methodName, methodInput, source, testCases}= this.state
    let code= inCode + source.name + "("+testCases[0].input +")"
    this.runCode(code) 
    // console.log(inCode)
    // inCode, methodName, methodInput
    // console.log( api_compiler())
    // fetchCompiler(code)
    // .then(res => { this.setState({
    //     compiledCode: res
    //               })
    //           return this.state.compiledCode
    //       })
    // .then(()=> {
    //   return this.runCode() 
    // })
  }

  runCode=(code)=>{
    const {compiledCode} = this.state
    // let func = eval(compiledCode);
    let func 
    let funcError=''
    // let func = eval(compiledCode);
    try {
       func = eval(code);
    } catch (e) {
      funcError = e;
    }
    let result = func ? func : funcError
    this.setState({
        result: result
    })
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
      testCases: state.testCases,
      correctResponses: state.correctResponses
  }
}


export default connect(mapStateToProps)(Quiz)