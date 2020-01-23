import React from 'react';
import OneAlgorithm from './OneAlgorithm'



class Algorithms extends React.Component {
    
   


    mapMethodsName=()=>{
        // const {show}= this.state
        return this.props.userAlgorithms.map((algo,index) => <OneAlgorithm algo={algo} key={index}/>)
    }

   
    render() {
      return <>
               <div className="column">
                <div className="ui list">
                    <h2>Algorithms List</h2>
                {this.mapMethodsName()}
                </div>
                </div>
             </>
    }
  }
   
  export default Algorithms;