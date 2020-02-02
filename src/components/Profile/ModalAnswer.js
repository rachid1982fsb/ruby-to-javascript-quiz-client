import React from 'react'
import { TextArea } from 'semantic-ui-react'

class ModalAnswer extends React.Component{



render(){
    const {show,answer,onHandleChange}= this.props
    return ( show ? <div className="ui form six wide column" centered={true}>
                        <div className="scrolling content">
                        <TextArea rows="20" value={answer} onChange={onHandleChange}></TextArea>
                        </div>
                    </div> : null
        
             )
}
}

export default ModalAnswer