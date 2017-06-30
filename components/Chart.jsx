import React from 'react'
import {Bar} from 'react-chartjs'

const getChartData = (d1, d2) => {
    return {
        labels: ["HTTP/1.1", "HTTP/2"],
        datasets: [{
            label: 'Speed in ms',
            data: [d1, d2],
            fillColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)'
            ],
            strokeColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)'
            ],
            borderWidth: 1
        }]
    }
}

const Chart = (props) => {
    let charData = getChartData(props.data.http1, props.data.http2)

    return (
        <div> 
            <Bar data={charData} width={600} height={400}/>
        </div>
    )
}

export default Chart;