import React from 'react'
import { TextArea } from 'semantic-ui-react'

const ModalAnswer=(props)=>{
    const {show,answer}= props

    return ( show ? <div className="ui form six wide column" centered={true}>
                        {/* <div className="header">Header</div> */}
                        <div className="scrolling content">
                        <TextArea rows="20" >{answer}</TextArea>
                        </div>
                    </div> : null
        
             )
}

export default ModalAnswer