import React from 'react';
import OneAlgorithm from './OneAlgorithm'



class Algorithms extends React.Component {
    
   


    mapMethodsName=()=>{
        // const {show}= this.state
        return this.props.userAlgorithms.map((algo,index) => <OneAlgorithm algo={algo} key={index}/>)
    }

    // showAnswer=(code)=> {
    //     this.setState({
    //         show: !this.state.show,
    //         answer: code
    //     })
    // }


    render() {
//   const {show, answer}= this.state
      return <>
               <div className="column">
                <div className="ui list">
                    <h2>Algorithms List</h2>
                {this.mapMethodsName()}
                </div>
                </div>
                {/* <ModalAnswer show={show} answer={answer}/> */}
             </>
    }
  }
   
  export default Algorithms;