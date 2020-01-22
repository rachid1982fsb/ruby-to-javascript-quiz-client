import React from 'react';



const RubyMethod=(props)=>{

    

    return(
        <div className="ui eight wide column">
        <h5> Ruby Method</h5>
          <div className="image">
            <img src={props.url} alt="HTML5" style={{width:"600px", height:"300px", borderRadius: 20, padding: 5}}/>
          </div>
        </div>
       )
}


export default RubyMethod