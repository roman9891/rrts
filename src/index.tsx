import React from "react";
import ReactDOM from 'react-dom/client'

class App extends React.Component {
    state = {
        counter: 0
    }

    onPlus = (): void => {
        this.setState({ counter: this.state.counter + 1})
    }
    onMinus = (): void => {
        this.setState({ counter: this.state.counter - 1})
    }

    render() {
        return (
            <div>
                Hi
                <button onClick={this.onPlus}>plus</button>
                <button onClick={this.onMinus}>minus</button>
                {this.state.counter}
            </div>
        )
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
    <App></App>
)