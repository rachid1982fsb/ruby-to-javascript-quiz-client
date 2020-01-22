import React from 'react';
import ModalAnswer from './ModalAnswer'
import OneMethod from './OneMethod'



class Submissions extends React.Component {
    
   


    mapMethodsName=()=>{
        // const {show}= this.state
        return this.props.correctResponses.map((answer,index) => <OneMethod answer={answer} key={index}/>)
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
                    <h2>Submissions List</h2>
                {this.mapMethodsName()}
                <div className="item">
                    <div className="content">
                    <div className="header">Compare the Triplets</div>
                    </div>
                </div>
                <div className="item">
                    <div className="content">
                    <div className="header">Birthday Cake Candles</div>
                    </div>
                </div>
                <div className="item">
                    <div className="content">
                    <div className="header">Mini-Max Sum</div>
                    </div>
                </div>
                </div>
                </div>
                {/* <ModalAnswer show={show} answer={answer}/> */}
             </>
    }
  }
   
  export default Submissions;

  