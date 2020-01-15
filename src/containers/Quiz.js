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
    result: ""
  })


  setResult= ()=>{
    this.setState({
      result: ""
    })
  }
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

  // getCurrentTestCases=()=>{
  //  return  
  // }


  
  fetchCode= (inCode)=>{
    fetchCompiler(inCode)
    .then(res => { this.setState({
                  compiledCode: res
                  })
                console.log(this.state.compiledCode)
              return this.state.compiledCode
          })
    .then(()=> this.handleRunClick() )
  }

  
  runCode=()=>{
    const {compiledCode, methodInput} = this.state
    console.log(compiledCode)
    let func = new Function("return " + compiledCode)();
    let result = compiledCode ? func(methodInput) : "Compiled Error"
    this.setState({
        result: result
    })
  }
  

  handleClick=(inCode)=>{
      console.log(inCode)
    this.fetchCode(inCode)
  }

  handleRunClick=()=>{
    this.runCode()
  }

 

  render() {
      const {compiledCode, result,source, testCases}=this.state
     
return  <>
            <QuizComponent onRunClick={this.handleClick} compiledCode={compiledCode} result={result} source={source} testCases={testCases} onSetResult={this.setResult}/>
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