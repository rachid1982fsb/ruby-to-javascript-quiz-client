import React from 'react'
import ModalAnswer from './ModalAnswer'
import {Redirect } from 'react-router-dom';

import {connect} from 'react-redux'
import {editAlgorithm, deleteAlgorithm, fetchUserAlgorithms} from '../../services/Api'
import {setUserAlgorithms} from '../../actions'




class OneAlgorithm extends React.Component {


    state=({
        show: false,
        code: ""
    })
   
    componentDidMount(){
        this.setState({
            code: this.props.algo.javascript_code,
            discription: this.props.algo.discription
        })
    }
    handleChange=(e)=>{
        this.setState({
            code: e.target.value 
        })
    }


    showAnswer=()=> {
        console.log("show Answer called", this.state.show)
        this.setState({
            show: !this.state.show
        })
    }
    handleEditClick=()=>{
        const {algo} = this.props
        let newAlgo = algo
        newAlgo.javascript_code =this.state.code
        editAlgorithm(newAlgo)
        .then(() => fetchUserAlgorithms()).then(res => this.props.setUserAlgorithms(res))
        console.log("edit")
        this.setState({
            show: !this.state.show
        })
        alert("Your Algorithm has been Edited successfully")
        return <Redirect to ='/profile'/>
    }

    handleDeleteClick=()=>{
        const {algo} = this.props
        deleteAlgorithm(algo.id)
        .then(() => fetchUserAlgorithms()).then(res => this.props.setUserAlgorithms(res))
        console.log("Delete")
        this.setState({
            show: !this.state.show
        })
        alert("Your Algorithm has been Deleted successfully")
        return <Redirect to ='/profile'/>
    }


    render (){
    const {show,code,discription}= this.state
    return ( <div className="item">
    <i className="linkify icon"></i>
    <div className="content">
    <div className="header" onClick={()=> this.showAnswer()} ><a>{this.props.algo.name}</a></div>
    </div>
    <ModalAnswer show={show} answer={code} discription= {discription}  onHandleChange={this.handleChange}/>
    {show ?  <button className="ui right labeled icon right floated button" onClick={this.handleEditClick}><i className="edit icon"></i>Edit</button> : null}
    {show ?  <button className="ui right labeled icon right floated button" onClick={this.handleDeleteClick}><i className="trash alternate icon"></i> Delete</button> : null}
 </div>)
    }
}



const mapDispatchToProps= dispatch =>{
    console.log("dispatch")
    return {
      setUserAlgorithms: resp => dispatch(setUserAlgorithms(resp))
    }
  }

export default connect(null, mapDispatchToProps)(OneAlgorithm)
