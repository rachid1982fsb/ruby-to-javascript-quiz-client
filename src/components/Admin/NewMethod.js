import React from 'react';

class NewMethod extends React.Component {

    handelChange=(e)=>{
        this.props.onHandelChange(e)
    }

    render(){
      const {methodName, methodDiscription, rubyMethod}=this.props.source
        return(<>
                <div className="required field">  
                    <label>Method Name:</label>
                    <input type="text" placeholder="Method Name" id="methodName"  onChange={this.handelChange} value={methodName}></input>
                </div>
                <div className="field">
                  <label>Method Discription:</label>
                  <textarea placeholder="Method Discription:" id="methodDiscription"  onChange={this.handelChange} value={methodDiscription}></textarea>
                </div>
                <div className="required field">
                  <label>Ruby Method Image link</label>
                  <div className="ui labeled input">
                      <div className="ui label">http://</div><input type="text" placeholder="URL..." id="rubyMethod"  onChange={this.handelChange} value={rubyMethod}/>
                  </div>
                </div>
        
        </>

        )
    }
}


export default NewMethod