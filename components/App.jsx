import React, { Component } from 'react'
import Iframe from './Iframe.jsx'
import Chart from './Chart.jsx'

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            urls: ['https://h1.falconpush.io:8080', 'https://h2.falconpush.io:8081'],
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

    msgHandler(msgEvent) {
        if (msgEvent.data.pageload) {
            console.log("data", msgEvent.data)
            let newData = Object.assign({}, this.state.data);
            newData[msgEvent.data.origin] = msgEvent.data.pageload;
            this.setState({ data: newData })
        }
    }

    render() {
        let iframeList = this.state.urls.map((src, i) => 
            <Iframe key={i} src={src} /> )
        return (
            <div className="demo">
                <h1>Speed Test </h1>
                <div className="iframes-block">
                    {iframeList}
                </div>
                <Chart data={this.state.data} />
            </div>
        )
    }
}

export default App;

