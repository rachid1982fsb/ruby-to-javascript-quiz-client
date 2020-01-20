import React from 'react';
import ModalAnswer from './ModalAnswer'


class Submissions extends React.Component {
    
    state=({
        show: false,
        answer: ""

    })


    mapMethodsName=()=>{
        return this.props.correctResponses.map((answer,index) => <div class="item" key={index}>
                                                            <i class="linkify icon"></i>
                                                            <div class="content">
                                                                {console.log(answer.javascript_code)}
                                                            <div class="header" onClick={()=> this.showAnswer(answer.javascript_code)} ><a>{answer.source.method_name}</a></div>
                                                            </div>
                                                         </div>)
    }

    showAnswer=(code)=> {
        this.setState({
            show: !this.state.show,
            answer: code
        })
    }


    render() {
  
  const {show, answer}= this.state
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
                <ModalAnswer show={show} answer={answer}/>
             </>
    }
  }
   
  export default Submissions;

  