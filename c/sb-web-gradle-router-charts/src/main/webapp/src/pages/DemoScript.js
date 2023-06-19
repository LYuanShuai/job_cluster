import React, {Component} from "react";
import Display from "../components/display/Display";

class DemoScript extends Component {
    constructor(props) {
        super(props);
        this.state = {
            header: {
                buttons: [
                    {
                        title: "New",
                        onClick: this.handleShow
                    }
                ]
            },
            form: {
                items: [
                    {
                        type: "input",
                        id: "id"
                    },
                    {
                        type: "input",
                        id: "script"
                    }
                ]
            },
            table: {
                cols: [
                    {
                        title: "ID",
                        dataIndex: "id",
                        key: "id"
                    },
                    {
                        title: "Name",
                        dataIndex: "name",
                        key: "name"
                    },
                    {
                        title: "Script",
                        dataIndex: "script",
                        key: "script",
                        formatter: (cellContent, row) => {
                            return <a style={{color: "blue", cursor: "pointer"}}
                                      onClick={this.handleShow}>{row.script}</a>
                        }
                    },
                    {
                        title: "Price",
                        dataIndex: "price",
                        key: "price"
                    },
                    {
                        title: "Operation",
                        dataIndex: "operation",
                        key: "operation"
                    }
                ]
                ,
                data: [{
                    id: 1,
                    name: "Item name 1",
                    price: 100,
                    script: "script"
                }, {
                    id: 2,
                    name: "Item name 2",
                    price: 100,
                    script: "script"
                }]
            },
            modal: {
                show: false,
                handleClose: () => {
                    let {modal} = this.state;
                    modal.show = false;
                    this.setState({modal: modal})
                }
            }
        }
    }

    handleShow = () => {
        let {modal} = this.state;
        modal.show = true;
        console.log(modal)
        this.setState({modal: modal})
    }

    render() {
        return (
            <Display {...this.state}/>
        )
    }
}

export default DemoScript;