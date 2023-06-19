import React, {Component} from 'react';
import Editor from "@monaco-editor/react";
import {Col, Container, Row, Tab, Tabs} from "react-bootstrap";

class MonacoEditor extends Component {
    constructor(props) {
        super(props);
        this.state = {
            show: false,
            currentTab: null,
            tabs: {
                contact: {
                    title: "Contact",
                    render: <div>contact</div>
                },
                gua: {
                    title: "Gua",
                    render: <div>gua</div>
                }
            }
        }
    }

    onSelect = eventKey => {
        if (this.state.currentTab === eventKey) {
            this.setState({currentTab: null})
            return
        }
        this.setState({currentTab: eventKey})
    }

    render() {
        let getRender = tab => {
            return tab && this.state.tabs[tab].render
        }
        return (
            <Container fluid={true}>
                <Row>
                    <Col xxl={10}>
                        <Row>
                            <Tabs onSelect={this.onSelect}>
                                <Tab eventKey="contact" title="Contact">
                                    {getRender(this.state.currentTab)}
                                </Tab>
                                <Tab eventKey="gua" title="Gua">
                                    {getRender(this.state.currentTab)}
                                </Tab>
                            </Tabs>
                        </Row>
                        <Row>
                            <Editor
                                height="75vh"
                                defaultLanguage="javascript"
                                defaultValue={this.props.script}
                            />
                        </Row>
                    </Col>
                    <Col>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default MonacoEditor;