import React from 'react';
import {fetchCompiler, saveAlgorithm} from '../services/Api'
import {connect} from 'react-redux'


 
class Admin extends React.Component {

render(){
  return(
        <>
          <h1>Add new Ruby Methods to the Quiz</h1>
              <div className="ui form">
                  <div class="required field">  
                    <label>Method Name:</label>
                    <input type="text" placeholder="Method Name" id="methodName"  onChange={this.handelChange}/>
                  </div>
                <div className="field">
                  <label>Method Discription:</label>
                  <textarea placeholder="Method Discription:" id="discription"  onChange={this.handelChange}></textarea>
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
                        <td data-label="Input"><input type="text" placeholder='e.g. string "Nice", Number 2 , [ ] ....'/></td>
                        <td data-label="Output"><input type="text" placeholder='e.g. string Nice, Number 2 , [ ] ....'/></td>
                      </tr>
                      <tr>
                        <td data-label="Test Cases">Sample 2</td>
                        <td data-label="Input"><input type="text" placeholder='e.g. string "Nice", Number 2 , [ ] ....'/></td>
                        <td data-label="Output"><input type="text" placeholder='e.g. string Nice, Number 2 , [ ] ....'/></td>
                      </tr>
                      <tr>
                        <td data-label="Test Cases">Sample 3</td>
                        <td data-label="Input"><input type="text" placeholder='e.g. string "Nice", Number 2 , [ ] ....'/></td>
                        <td data-label="Output"><input type="text" placeholder='e.g. string Nice, Number 2 , [ ] ....'/></td>
                      </tr>
                      <tr>
                        <td data-label="Test Cases">Sample 4</td>
                        <td data-label="Input"><input type="text" placeholder='e.g. string "Nice", Number 2 , [ ] ....'/></td>
                        <td data-label="Output"><input type="text" placeholder='e.g. string Nice, Number 2 , [ ] ....'/></td>
                      </tr>
                    </tbody>
              </table>
              <div class="required field">
                  <label>Ruby Method Image link</label>
                  <input type="text" placeholder="URL..."/>
                </div>
              </div>     
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
