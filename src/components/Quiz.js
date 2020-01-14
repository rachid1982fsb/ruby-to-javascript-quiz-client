import React from 'react';
import {connect} from 'react-redux'
import {fetchCompiler} from '../services/Api'



class Quiz extends React.Component {

  state=({
    compiledCode: "",
    inputCode: "",
    methodInput:[1,3,5,6]
  })

  // componentDidMount(){
  //   this.fetchCompiler()
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

 

  handleChange=(e)=>{
    this.setState({
      inputCode: e.target.value
    })
  }
  handleInputChange=(e)=>{
    this.setState({
      methodInput: e.target.value
    })
  }


  runCode=()=>{
    let func = new Function("return " + this.state.compiledCode)();
    let result = func(this.state.methodInput)
    console.log(result)
  }
  

  handleClick=()=>{
    this.fetchCode(this.state.inputCode)
  }

  handleRunClick=()=>{
    this.runCode(this.state.methodInput)
  }

 

  render() {
      // this.fetchCompiler()
      const {username} = this.props.currentUser
    return  <>
            <p> CompiledCode: {this.state.compiledCode}</p>
            <textarea name="js_code" cols="50" rows="5" id="method" onChange={this.handleChange}></textarea >
            Method Input: <input onChange={ this.handleInputChange}/>
            <button onClick={this.handleClick}>Run</button>
            <h1>This is my Quiz component! Hello: {username}</h1>
            </>
  }



}
 

const mapStateToProps= state =>{
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(Quiz)


// fetchTest=()=>{
//   fetch(URL, {method: 'post',
//        headers: headers,
//       //  client_secret: CLIENT_SECRET, 
//        bady: Data
//     }).then(data => console.log(data))
//   }

// import axios from 'axios'


// const URL="http://api.hackerearth.com/code/compile/"
// const headers = { "content-type" : "application/json; charset=UTF-8"}
// const CLIENT_SECRET ="20df01c1563bbb5bd486f7eea7a6f470f9ef7560"
// const source= "console.log('Rachid Here')"
// const Data={
//     'client_secret': CLIENT_SECRET,
//     'source': source,
//     'lang': "JAVASCRIPT"
// }
// fetchTest=()=>{
//   axios({method: 'post',
//        url: URL,
//        headers: headers,
//        client_secret: CLIENT_SECRET, 
//        data: JSON.stringify(Data)
//     }).then(data => console.log(data))
//   }