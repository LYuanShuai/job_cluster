import React from "react";
import {Button} from "react-bootstrap";
import ScriptModal, {ScriptModalProps as ModalProps} from "../modals/ScriptModal"
import TableAntd, {Props as TableProps} from "./table/TableAntd";
import {Header} from "../prototypes/Header";
import FlowForm, {Props as FlowProps} from "../display/form/FlowForm"
import CreateModal, {CreateModalFormField} from "../modals/CreateModal";
import {ResourceUpdateParam} from "../../dao/ResourceDao";
import FormedScriptModal, {FormedScriptModalFormField} from "../modals/FormedScriptModal";

export interface Props {
    header: Header;
    form: FlowProps;
    table: TableProps;
    modal: ModalProps;
    cmTitle: string | undefined;
    cmShow: boolean;
    cmFields: CreateModalFormField[];
    cmInitialValues: any | undefined;
    cmOnClose: () => void;
    cmHandleShow: () => void;
    cmHandleSubmit: ((resource: ResourceUpdateParam) => void) | undefined;
    fsmShow: boolean;
    fsmTitle: string | undefined;
    fsmInitialValues: any | undefined;
    fsmFields: FormedScriptModalFormField[] | undefined;
    readonly fsmHandleSubmit: ((resource: ResourceUpdateParam) => void) | undefined;
    readonly fsmHandleClose: () => void;
}

const Display: React.FC<Props> = props => {
    return (
        <div>
            <div>
                {props.header.buttons.map(button => {
                    return <Button onClick={button.onClick}>{button.title}</Button>
                })}
            </div>
            <FlowForm {...props.form}/>
            <TableAntd {...props.table}/>
            <ScriptModal {...props.modal}></ScriptModal>
            <CreateModal title={props.cmTitle}
                         fields={props.cmFields}
                         initialValues={props.cmInitialValues}
                         handleClose={props.cmOnClose}
                         show={props.cmShow}
                         handleSubmit={props.cmHandleSubmit}
            />
            <FormedScriptModal
                show={props.fsmShow}
                title={props.fsmTitle}
                fields={props.fsmFields}
                initialValues={props.fsmInitialValues}
                handleSubmit={props.fsmHandleSubmit}
                handleClose={props.fsmHandleClose}
            />
        </div>
    )
}

export default Display;