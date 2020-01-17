import React from 'react';



class Submissions extends React.Component {


    // mapMethodsName=()=>{
    //     this.props.methodName.map((name,index)=> <div class="item" key={index}>
    //                                                 <div class="content">
    //                                                 <div class="header">{name}</div>
    //                                                 </div>
    //                                             </div>)
    // }


    render() {
  
  
      return <>
      <div class="column">
                <div class="ui middle aligned animated list">
                    <h2>Submissions List</h2>

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

  