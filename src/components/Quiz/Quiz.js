import React from 'react';
import {connect} from 'react-redux'
import SampleTest from './SampleTest'
import RubyMethod from './RubyMethod'


class Quiz extends React.Component {

  state=({
    inputCode: ""
  })

  handleChange=(e)=>{
    this.setState({
      inputCode: e.target.value
    })
  }

  handelResetClick=()=>{
    this.setState({
      inputCode: ""
    })
    this.props.onSetResult()
  }

  handelNextClick=()=>{
    this.handelResetClick()
    this.props.onNextClick()
    this.props.onSetResult()
  }

  render() {
      const {source, testCases, onRunClick} = this.props
      const {inputCode} = this.state    
      return  <>
              <h3 className="ui center aligned header" style={{margin: '0'}}> Ruby to javascript Quiz <div className="image">
                  <img src="https://memorycardgame.s3.amazonaws.com/images/Screen%20Shot%202020-01-22%20at%203.45.56%20PM.png" alt="" style={{width:"150px", height:"100px" , borderRadius: 20, padding: 5}} />
                </div></h3>
              <div className="ui message">
                  <div className="header">
                  Method Name: {source.method_name}
                  </div>
                  <p>Method Discription: {source.method_discription}</p>
              </div>
             
              <div className="ui grid">
                <div className="eight wide column"><RubyMethod  url={source.ruby_method}/></div>
                <div className="six wide column"><SampleTest  testCases={testCases}/></div>
              </div>
              <div className="ui grid">
                <div className="ui form eight wide column">
                <div className="ui raised very padded text container segment">
                  {/* <div className="field"> */}
                    <label style={{fontWeight: 'bold'}}>Translate "{source.name}" Method to Javascript.<i className="angle double down icon"></i></label>
                    <textarea rows="15" placeholder="Write your code here... "  onChange={this.handleChange} value={this.state.inputCode}/>
                  </div>
                </div>
                <div className="ui form six wide column">
                <div className="ui raised very padded text container segment">
                      <label style={{fontWeight: 'bold'}}>The Method Output. <i className="angle double down icon"></i></label>
                      <textarea rows="15" placeholder="Code Output:..." value ={this.props.result} readOnly={true}>{this.props.result} </textarea>
                    </div>
                </div>
                </div>
              
              <div className="ui divider"></div>
              <div>  
                <button className="ui primary button" onClick={() => this.props.onSubmitClick(inputCode)}>Submit Code</button>
                <button className="ui left floated button" onClick={() => this.handelResetClick()}>Reset</button>
                <button className="ui right labeled icon right floated button" onClick={() => this.handelNextClick()}><i className="right arrow icon"></i> Next</button>
                <button className="ui right floated primary button" onClick={() => onRunClick(inputCode)}> Run Code </button>
              </div>
            </>
  }
}
 

const mapStateToProps= state =>{
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(Quiz)
