import React from 'react'

const Iframe = (props) => {
    console.log("url", props.src)
    return (
        <div> 
            <iframe src={props.src} />
        </div>
    )
}

export default Iframe;