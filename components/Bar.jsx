import React from 'react'

const Bar = (props) => {
    return (
        <g> 
            <rect x="100" y="100" width="100px" height={props.data}>chart</rect>
        </g>
    )
}

export default Bar;