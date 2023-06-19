import React, {useEffect} from "react";
import {Button, Form, Input, Modal, Select} from "antd";
import AntdMonacoEditor from "../fields/AntdMonacoEditor";

export interface FormedScriptModalFormField {
    type: string;
    label: string;
    name: string;
    hidden?: boolean;
    values?: string[];
}

export interface FormedScriptModalProps {
    title?: string;
    show?: boolean | undefined;
    initialValues?: any | undefined;
    fields?: FormedScriptModalFormField[];
    handleClose?: () => void;
    handleShow?: () => void;
    handleSubmit?: (values: any) => void;
}

const FormedScriptModal: React.FC<FormedScriptModalProps> = props => {
    console.log(props)

    const [form] = Form.useForm()

    useEffect(() => {
            form.setFieldsValue(props.initialValues)
        },
        [form, props.initialValues]
    )

    return (
        <Modal title={props.title} visible={props.show} footer={null} width={1600} onCancel={props.handleClose}>
            <Form
                form={form}
                name="basic"
                labelCol={{span: 8}}
                wrapperCol={{span: 16}}
                initialValues={props.initialValues}
                autoComplete="off"
                onFinish={props.handleSubmit}
                size={"large"}
            >
                {props.fields && props.fields.map(field => {
                    switch (field.type) {
                        case 'input':
                            return (
                                <Form.Item label={field.label} name={field.name} hidden={field.hidden}>
                                    <Input/>
                                </Form.Item>
                            );
                        case 'select':
                            return (
                                <Form.Item label={field.label} name={field.name} hidden={field.hidden}>
                                    <Select>
                                        {field.values && field.values.map(value => {
                                                return (
                                                    <Select.Option value={value}>{value}</Select.Option>
                                                )
                                            }
                                        )}
                                    </Select>
                                </Form.Item>
                            )
                        case 'monaco':
                            return (
                                <Form.Item name={field.name} hidden={field.hidden}>
                                    <AntdMonacoEditor visible={true}
                                                      handleValuedChanged={value => form.setFieldValue(field.name, value)}
                                    />
                                </Form.Item>
                            )
                        default:
                            return (
                                <></>
                            )
                    }
                })}
                <Form.Item wrapperCol={{offset: 8, span: 16}}>
                    <Button danger type="primary" htmlType="submit">
                        Submit
                    </Button>
                    <Button type={"primary"} onClick={props.handleClose}>
                        Cancel
                    </Button>
                </Form.Item>
            </Form>
        </Modal>
    );
}

export default FormedScriptModal