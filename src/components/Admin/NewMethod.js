import React from 'react';
import {fetchCompiler, saveAlgorithm} from '../../services/Api'
import {connect} from 'react-redux'


 
class NewMethod extends React.Component {



    handelChange=(e)=>{
        this.props.onHandelChange(e)
    }

    render(){
        return(<>
                <div className="required field">  
                    <label>Method Name:</label>
                    <input type="text" placeholder="Method Name" id="methodName"  onChange={this.handelChange}/>
                </div>
                <div className="field">
                  <label>Method Discription:</label>
                  <textarea placeholder="Method Discription:" id="methodDiscription"  onChange={this.handelChange}></textarea>
                </div>
                <div className="required field">
                  <label>Ruby Method Image link</label>
                  <input type="text" placeholder="URL..." id="rubyMethod"  onChange={this.handelChange}/>
                </div>
        </>

        )
    }
}


export default NewMethod