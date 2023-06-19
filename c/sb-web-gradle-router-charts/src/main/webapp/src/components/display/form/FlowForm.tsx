import React from "react";
import {Col, Container, Form, Row} from "react-bootstrap";

export type PtFormItem = {
    label: string;
    type: string;
    id: string;
}

export type Props = {
    items: PtFormItem[];
}

const FlowForm: React.FC<Props> = props => {

    return (
        <Form>
            <Container>
                {props.items.map(
                    item => {
                        switch (item.type) {
                            case 'input' : {
                                return (
                                    <Form.Group controlId={item.id}>
                                        <Row>
                                            <Col xxl={2}>
                                                <Form.Label>{item.id}</Form.Label>
                                            </Col>
                                            <Col>
                                                <Form.Control type={"text"} placeholder={"gulugulu"}/>
                                            </Col>
                                        </Row>
                                    </Form.Group>
                                )
                            }
                            default:
                                break;
                        }
                    }
                )}
            </Container>
        </Form>
    )
}

export default FlowForm;