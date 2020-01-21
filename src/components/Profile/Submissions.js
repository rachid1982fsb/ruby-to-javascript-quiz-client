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
               <div class="column">
                <div class="ui list">
                    <h2>Submissions List</h2>
                {this.mapMethodsName()}
                <div class="item">
                    <div class="content">
                    <div class="header">Compare the Triplets</div>
                    </div>
                </div>
                <div class="item">
                    <div class="content">
                    <div class="header">Birthday Cake Candles</div>
                    </div>
                </div>
                <div class="item">
                    <div class="content">
                    <div class="header">Mini-Max Sum</div>
                    </div>
                </div>
                </div>
                </div>
                {/* <ModalAnswer show={show} answer={answer}/> */}
             </>
    }
  }
   
  export default Submissions;

  