import React, {useState} from "react";
import {Button, Modal} from "react-bootstrap";
import MonacoEditor from "../../pages/MonacoEditor";
import {ee} from "../../common/Common";

export interface ScriptModalProps {
    show: boolean;
    handleClose: () => void;
}

export enum Event {
    SHOW = "show"
}

const ScriptModal: React.FC<ScriptModalProps> = props => {
    const [show, setShow] = useState(false)

    ee.on(Event.SHOW, script => {
        setShow(true)
    })

    return (<Modal show={show} onHide={() => setShow(false)} animation={false}
                   fullscreen={true}>
        <Modal.Header closeButton>
            <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>
            <MonacoEditor/>
        </Modal.Body>
        <Modal.Footer>
            <Button variant="secondary" onClick={() => setShow(false)}>
                Close
            </Button>
            <Button variant="primary" onClick={() => setShow(false)}>
                Understood
            </Button>
        </Modal.Footer>
    </Modal>)
}

export default ScriptModal;