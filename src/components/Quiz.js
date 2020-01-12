import React from 'react';
import {connect} from 'react-redux'

class Quiz extends React.Component {
  render() {
    const {username} = this.props.currentUser
  return <h1>This is my Quiz component! Hello: {username}</h1>;
  }
}
 

const mapStateToProps= state =>{
  return {
    currentUser: state.currentUser
  }
}

export default connect(mapStateToProps)(Quiz)