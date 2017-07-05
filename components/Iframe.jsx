import React from 'react'
        
const Iframe = (props) => {
    return (
        <div className='iframeContainer'> 
            <iframe className='iframe' src={props.src} />
        </div>
    )
}

export default Iframe;