import React from 'react';
import {fetchCompiler, fetchSource, fetchTestCases} from '../services/Api'
import QuizComponent from '../components/Quiz/Quiz'
import {connect} from 'react-redux'






class Quiz extends React.Component {

  state=({
    qustion: 1,
    testCases: [],
    source: {},
    compiledCode: "",
    methodInput: [1,3,5,6],
    result: "",
    testsResult: []
  })


  setResult= ()=>{
    this.setState({
      result: ""
    })
  }

  handelNextClick=()=>{
    
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
  componentDidMount(){
    const {source, testCases}=this.props
    const {qustion} = this.state
    this.setState({
        source: source.find(oneCode => oneCode.id === qustion)
         })
    this.setState({
        testCases: testCases.filter(testCase => testCase.source_id === qustion)
        })
  }

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
      const {compiledCode, result, source, testCases}=this.state
      return  <>
                <QuizComponent onRunClick={this.handleClick} compiledCode={compiledCode} result={result} source={source} testCases={testCases} onSetResult={this.setResult} onSubmitClick={this.handleSubmit} onNextClick={this.handelNextClick}/>
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