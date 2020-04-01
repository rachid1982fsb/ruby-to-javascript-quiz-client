import React from 'react';



const RubyMethod=(props)=>{

    

    return(
      <div className="ui raised very padded text container segment">
      <label style={{fontWeight: 'bold'}}>Ruby Method<i className="angle double down icon"></i></label>
          <div className="image">
            <img src={props.url} alt="HTML5" style={{width:"600px", height:"300px", borderRadius: 20, padding: 5}}/>
          </div>
        </div>
       )
}


export default RubyMethod