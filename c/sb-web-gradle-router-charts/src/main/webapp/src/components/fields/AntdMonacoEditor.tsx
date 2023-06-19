import React, {ReactNode, useState} from 'react';
import Editor from "@monaco-editor/react";
import {Col, Row, Tabs} from "antd";

export interface AntdMonacoEditorTab {
    title: string;
    eventKey: string;
    render: () => ReactNode;
}

export interface AntdMonacoEditorProps {
    visible: boolean;
    defaultTabKey?: string;
    tabs?: AntdMonacoEditorTab[];
    value?: string;
    handleValuedChanged?: (value: string | undefined) => void;
}

const AntdMonacoEditor: React.FC<AntdMonacoEditorProps> = props => {
    const tabs: AntdMonacoEditorTab[] = props.tabs || [
        {
            title: "Contact",
            render: () => <div>contact</div>,
            eventKey: "contact"
        },
        {
            title: "Gua",
            render: () => <div>gua</div>,
            eventKey: "gua"
        }
    ]

    const [currentTab, setCurrentTab] = useState<AntdMonacoEditorTab>()

    const indexedTab: ({ [key: string]: AntdMonacoEditorTab }) = {}
    tabs && tabs.map(tab => {
        indexedTab[tab.eventKey] = tab
    })

    const handleSelect: (key: string) => void = key => {
        if (currentTab && key == currentTab.eventKey) {
            setCurrentTab(undefined)
        } else {
            setCurrentTab(indexedTab[key])
        }
    }

    console.log(props)

    return (
        <Row>
            <Col xxl={10}>
                <Row>
                    <Tabs defaultActiveKey={props.defaultTabKey} onTabClick={handleSelect}>
                        {tabs && tabs.map(tab => {
                            return (
                                <Tabs.TabPane tab={tab.title} key={tab.eventKey}>
                                    {currentTab && currentTab.render()}
                                </Tabs.TabPane>
                            )
                        })}
                    </Tabs>
                </Row>
                <Row>
                    <Editor
                        height="75vh"
                        defaultLanguage="javascript"
                        defaultValue={props.value}
                        onChange={props.handleValuedChanged}
                    />
                </Row>
            </Col>
            <Col>
            </Col>
        </Row>
    );

}

export default AntdMonacoEditor;