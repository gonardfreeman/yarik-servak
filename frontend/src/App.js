import React from "react";
import "./App.css";

class App extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            article: null,
        };
    }

    async loadData() {
        try {
            let resp = await (await fetch("/article/1")).json();
            this.setState({
                article: resp.article,
            });
        } catch (err) {
            console.log(err);
        }
    }

    componentDidMount() {
        this.loadData();
    }

    render() {
        return (
            <div className="wrapper">
                <h1>Hello World</h1>
                <p>{this.state.article}</p>
            </div>
        );
    }
}

export default App;
