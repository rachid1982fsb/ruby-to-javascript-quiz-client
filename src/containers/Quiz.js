import React from 'react';
import {fetchCompiler, fetchSource, fetchTestCases} from '../services/Api'
import QuizComponent from '../components/Quiz/Quiz'
import {connect} from 'react-redux'


class Quiz extends React.Component {

  state=({
    qustion: 0,
    testCases: [],
    source: {},
    compiledCode: "",
    methodInput: [1,3,5,6],
    result: "",
    testResult:"",
    testsResult: []
  })

  componentDidMount(){
    this.populateState()
  }

  setResult= ()=>{
    this.setState({
      result: ""
    })
  }

  handelNextClick=()=>{
     if(this.state.qustion < 3){
       this.populateState()
     }
  }

  populateState=()=>{
    const {source, testCases}=this.props
    const {qustion} = this.state
    let nextQustion = qustion + 1
    this.setState({
        qustion: nextQustion,
        source: source.find(oneCode => oneCode.id === nextQustion),
        testCases: testCases.filter(testCase => testCase.source_id === nextQustion)
         })
  }

  handleSubmit=(inCode)=>{
    const {result, testCases, testsResult, methodInput} = this.state
    let test =[3.5,4]
    this.handleClick(inCode)
    for(let i=0; i<4; i++){
      testsResult.push(this.runCode(methodInput))
      if(result.toString() != test.toString() ){
        return this.setState({testResult: "Test fail"})
      }
    }
    this.setState({testResult: "Test Pass"})
  } 

  // testCases[0].output
  fetchCode= (inCode)=>{
    fetchCompiler(inCode)
    .then(res => { this.setState({
                  compiledCode: res
                  })
                // console.log(this.state.compiledCode)
              return this.state.compiledCode
          })
    .then(()=> {
      // console.log(this.runCode() )
      return this.runCode(this.state.methodInput) 
    })
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