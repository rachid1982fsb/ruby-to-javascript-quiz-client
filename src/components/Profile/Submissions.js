import React from 'react';



class Submissions extends React.Component {


    mapMethodsName=()=>{
        return this.props.correctResponses.map((answer,index) => <div class="item" key={index}>
                                                            <i class="linkify icon"></i>
                                                            <div class="content">
                                                            <div class="header" onClick={()=> this.showAnswer(answer.javascript_code)} ><a>{answer.source.method_name}</a></div>
                                                            </div>
                                                         </div>)
    }

    showAnswer=(code)=>{
        return (
            <div class="ui modal">
                <div class="header">Header</div>
                <div class="scrolling content">
                <p>Very long content goes here</p>
                </div>
            </div>
        )
            
    }





    


    render() {
  
  
      return <>
      <div class="column">
                <div class="ui middle aligned animated list">
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
             </>
    }
  }
   
  export default Submissions;

  