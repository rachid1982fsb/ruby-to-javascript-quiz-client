import React from 'react'
import { TextArea } from 'semantic-ui-react'

const ModalAnswer=(props)=>{
    const {show,answer}= props

    return ( show ? <div class="ui form six wide column" centered={true}>
                        <div class="header">Header</div>
                        <div class="scrolling content">
                        <TextArea rows="20" >{answer}</TextArea>
                        </div>
                    </div> : null
        
             )
}

export default ModalAnswer