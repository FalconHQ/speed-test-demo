import React from 'react'
import Bar from './Bar.jsx'

const Chart = (props) => {
    console.log("chart props :", props)
    return (
        <div> 
            <h1>chart </h1>
            <svg width={300} height={200}> 
                <Bar data={props.data.http1}/>
                <Bar data={props.data.http2}/>
            </svg>
        </div>
    )
}

export default Chart;