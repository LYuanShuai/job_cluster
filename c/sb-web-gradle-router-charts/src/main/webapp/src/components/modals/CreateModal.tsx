import React, {useEffect} from "react";
import {Button, Form, Input, Modal, Select} from "antd";

export interface CreateModalFormField {
    type: string;
    label: string;
    name: string;
    hidden?: boolean;
    values?: string[];
}

export interface CreateModalProps {
    title?: string;
    show?: boolean | undefined;
    initialValues?: any | undefined;
    fields?: CreateModalFormField[];
    handleClose?: () => void;
    handleShow?: () => void;
    handleSubmit?: (values: any) => void;
}

export enum CreateModalEvent {
    SHOW = "CreateModal.show",
    CLOSE = "CreateModal.close"
}

const CreateModal: React.FC<CreateModalProps> = props => {
    console.log(props)

    const [form] = Form.useForm()

    useEffect(() => {
            form.setFieldsValue(props.initialValues)
        },
        [form, props.initialValues]
    )

    return (
        <Modal title={props.title} visible={props.show} footer={null} onCancel={props.handleClose}>
            <Form
                form={form}
                name="basic"
                labelCol={{span: 8}}
                wrapperCol={{span: 16}}
                initialValues={props.initialValues}
                autoComplete="off"
                onFinish={props.handleSubmit}
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

export default CreateModal