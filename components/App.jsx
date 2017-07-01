import React,{ Component } from 'react'
import Iframe from './Iframe.jsx'
import Chart from './Chart.jsx'


class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            urls: ['https://localhost:8080', 'https://localhost:8081'],
            data: {
                http1: 0,
                http2: 0
            }
        }

    this.msgHandler = this.msgHandler.bind(this);

    }
    componentDidMount() {
        window.addEventListener('message', this.msgHandler, false)
    }
    componentWillUnmount() {
        window.removeEventListener('message', this.msgHandler, false);
    }

    msgHandler (msgEvent) {
        if(msgEvent.data.pageload) {
            console.log("data", msgEvent.data)
            let newData = Object.assign({}, this.state.data);
            newData[msgEvent.data.origin] = msgEvent.data.pageload;
            this.setState({data: newData})
        }
    }

    render() {
        let iframeList = this.state.urls.map((src, i) => <Iframe key={i} src={src} /> )
        console.log("list", iframeList)
        return (
            <div> 
                <h1>World </h1>
                {iframeList}
                <Chart data={this.state.data}/>
                {/*<Bar data={chartData}  width="600" height="250"/>*/}
            </div>
        )
    }
}

export default App;