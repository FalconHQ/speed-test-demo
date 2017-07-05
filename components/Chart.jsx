import React from 'react'
import {Bar} from 'react-chartjs'

const getChartData = (d1, d2) => {
    return {
        labels: ["HTTP/1.1", "HTTP/2"],
        datasets: [{
            label: 'Speed in ms',
            data: [d1 + 200, d2],
            fillColor: [
                'rgba(255, 10, 50, 0.5)',
                'rgba(66, 33, 92, 0.5)'
            ],
            strokeColor: [
                'rgba(255,10,50,1)',
                'rgba(66, 33, 92, 1)'
            ],
            borderWidth: 1
        }]
    }
}

const Chart = (props) => {
    let charData = getChartData(props.data.http1, props.data.http2)

    return (
        <div className="speed-chart"> 
            <Bar data={charData} width={600} height={400}/>
        </div>
    )
}

export default Chart;