import React, { Component } from 'react';
import axios from "axios";
import {ee} from "../common/Common";

class HelloWorld extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: "This is a default message."
        }
        ee.emit("pwd.getAll", ee)
    }

    componentDidMount() {
        axios.get("/hello")
            .then(res => {
                console.log(res.data)
                this.setState({content: res.data})
            })
    }

    render() {
        return (
            <div className="App">
                {this.state.content}
            </div>
        );
    }
}

export default HelloWorld;