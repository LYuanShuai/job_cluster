import React, {useEffect, useState} from 'react';
import Display from "../../components/display/Display";
import {Button} from "antd";
import {CaretRightOutlined, EditOutlined} from "@ant-design/icons";
import {ee} from "../../common/Common";
import {Resource} from "../../domain/Resource";
import ResourceEvent, {ResourceUpdateParam} from "../../dao/ResourceDao";
import {CreateModalFormField, CreateModalProps} from "../../components/modals/CreateModal";
import {FormedScriptModalFormField} from "../../components/modals/FormedScriptModal";

enum ResourcePageEvent {
    HIDE_CREATE_MODAL = "ResourcePage.hideCreateModal"
}


const ResourcePage: React.FC = () => {
    let [rows, setRows] = useState<Resource[]>()

    let [modalShow, setModalShow] = useState(false)

    const [cmShow, setCmShow] = useState<boolean>(false)

    const [cmInitialValues, setCmInitialValues] = useState<any>()

    const [cmTitle, setCmTitle] = useState<string>()

    const [submitEvent, setSubmitEvent] = useState<string>(ResourceEvent.UPDATE)

    const cmFields: CreateModalFormField[] = [
        {
            label: "ID",
            name: "id",
            type: "input",
            hidden: true
        },
        {
            label: "Name",
            type: "input",
            name: "name",
        },
        {
            label: "Type",
            type: "select",
            name: "type",
            values: [
                "plantuml"
            ]
        },
        {
            label: "Environment",
            type: "select",
            name: "env",
            values: [
                "dev", "test", "pre", "product"
            ]
        }
    ];

    const [fsmShow, setFsmShow] = useState<boolean>(false)

    const [fsmInitialValues, setFsmInitialValues] = useState<any>()

    const [fsmTitle, setFsmTitle] = useState<string>()

    const fsmFields: FormedScriptModalFormField[] = [
        {
            label: "ID",
            name: "id",
            type: "input",
            hidden: true
        }
        ,
        {
            label: "Name",
            type: "input",
            name: "name",
            hidden: true
        },
        {
            label: "Type",
            type: "select",
            name: "type",
            hidden: true,
            values: [
                "plantuml"
            ]
        },
        {
            label: "Environment",
            type: "select",
            name: "env",
            hidden: true,
            values: [
                "dev", "test", "pre", "product"
            ]
        },
        {
            type: "monaco",
            label: "script",
            name: "script"
        }
    ]


    const [createModal, setCreateModal] = useState<CreateModalProps>({
        title: "Create a New Resource",
        show: false,
        fields: [
            {
                label: "ID",
                name: "id",
                type: "input",
                hidden: true
            },
            {
                label: "Name",
                type: "input",
                name: "name"
            },
            {
                label: "Type",
                type: "select",
                name: "type",
                values: [
                    "plantuml"
                ]
            },
            {
                label: "Environment",
                type: "select",
                name: "env",
                values: [
                    "dev", "test", "pre", "product"
                ]
            }
        ],
        handleClose: () => ee.emit(ResourcePageEvent.HIDE_CREATE_MODAL),
        handleShow: () => {
            setCmShow(true)
        }
    })

    const hideCreateModal = () => {
        setCreateModal({
            show: false,
            initialValues: undefined
        })
        setCmShow(false)

        console.log(createModal)
    }

    const showUpdateModal = (resource: Resource) => {
        setCmTitle("Update Resource")
        setCmInitialValues(resource)
        setSubmitEvent(ResourceEvent.UPDATE)
        setCmShow(true)
    }

    const showFsm = (resource: Resource) => {
        setFsmTitle("Edit~~")
        setFsmInitialValues(resource)
        setSubmitEvent(ResourceEvent.UPDATE_SCRIPT)
        setFsmShow(true)
    }

    const state = {
        header: {
            buttons: [
                {
                    title: "New",
                    onClick: () => {
                        setCmShow(true)
                    }
                }
            ]
        },
        form: {
            items: [
                {
                    type: "input",
                    label: "id",
                    id: "id"
                },
                {
                    type: "input",
                    label: "script",
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
                    title: "Type",
                    dataIndex: "type",
                    key: "type"
                },
                {
                    title: "Environment",
                    dataIndex: "env",
                    key: "env"
                },
                {
                    title: "Script",
                    dataIndex: "script",
                    key: "script",
                    render: (value: string, record: Resource) => {
                        return <a className={"blue"} onClick={() => showFsm(record)}>script</a>
                    }
                },
                {
                    title: "Operation",
                    dataIndex: "operation",
                    key: "operation",
                    render: (value: null, record: Resource) => {
                        return (
                            <div>
                                <Button type="primary" shape="circle" icon={<CaretRightOutlined/>}/>
                                <Button type="primary" icon={<EditOutlined/>} onClick={() => showUpdateModal(record)}/>
                            </div>
                        );
                    }
                }
            ]
            ,
            rows: rows
        },
        modal: {
            show: modalShow,
            handleClose: () => {
                setModalShow(false)
            }
        }
    }

    const updateAll: () => void = () => {
        ee.emit(ResourceEvent.ALL, {
            cb: (resources: Resource[]) => {
                console.log(resources)
                setRows(resources)
            }
        })
    }

    useEffect(() => {
            updateAll()
            ee.on(ResourcePageEvent.HIDE_CREATE_MODAL, () => {
                let modal = createModal
                modal.show = false
                setCreateModal(modal)
            })
        }, []
    );

    const handleCmClose: () => void = () => {
        setCmShow(false)
        setCmInitialValues(undefined)
    }

    const handleUpdate: (resource: any) => void = (resource: ResourceUpdateParam) => {
        ee.emit(submitEvent, resource, updateAll)
    }

    const handleCmSubmit: (resource: any) => void = (resource: ResourceUpdateParam) => {
        handleUpdate(resource)
        handleCmClose()
    }

    const handleFsmClose: () => void = () => {
        setFsmShow(false)
        setFsmInitialValues(undefined)
    }

    const handleFsmSubmit: (resource: any) => void = (resource: ResourceUpdateParam) => {
        handleUpdate(resource)
        handleFsmClose()
    }

    return (
        <Display
            cmTitle={cmTitle}
            cmFields={cmFields}
            cmHandleSubmit={(resource) => handleCmSubmit(resource)}
            cmInitialValues={cmInitialValues}
            cmOnClose={handleCmClose}
            cmShow={cmShow}
            cmHandleShow={() => setCmShow(true)}
            fsmShow={fsmShow}
            fsmTitle={fsmTitle}
            fsmFields={fsmFields}
            fsmInitialValues={fsmInitialValues}
            fsmHandleSubmit={resource => handleFsmSubmit(resource)}
            fsmHandleClose={handleFsmClose}
            {...state}/>
    )
}

export default ResourcePage