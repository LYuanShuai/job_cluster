import React, {ReactNode, useState} from 'react';
import './App.css';
import {Container, Nav, Navbar} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import {Dropdown, Menu} from "antd";
import 'antd/dist/antd.min.css'
import {ee} from "./common/Common";
import Event from "./dao/ConfigDao";

interface Page {
    key: string;
    title: string;
}

interface Data {
    defaultPage: string;
    currentPage: React.FC | null;
    pages: Page[]
}

interface LoadedPage {
    key: string;
    comp: ReactNode
}

interface IndexedPage {
    [key: string]: LoadedPage;
}

const App: React.FC = () => {
    let data: Data = {
        defaultPage: "HelloWorld",
        currentPage: null,
        pages: [
            {
                title: "Hello World",
                key: "HelloWorld"
            }, {
                title: "Echarts Bar",
                key: "EchartsBarBasic"
            }, {
                title: "Monaco",
                key: "MonacoEditor"
            }, {
                title: "React Table",
                key: "ReactTableDemo"
            }, {
                title: "Demo Script",
                key: "DemoScript"
            }
        ]
    }

    let indexedPages: IndexedPage = {}

    const ensureLoaded: (key: string) => void = (key: string) => {
        let pageFound = indexedPages[key]
        if (pageFound === undefined) {
            let Comp = require(`./pages/${key}`).default
            indexedPages[key] = {
                key: key, "comp": <Comp/>
            }
        }
    }

    ensureLoaded(data.defaultPage);
    let menu = [
        {
            label: 'Config',
            key: 'config'
        },
        {
            label: 'Diagram',
            key: 'diagram',
            disabled: true,
        },
        {
            label: 'Resource',
            key: 'resource'
        },
        {
            label: 'Password',
            key: 'password'
        },
        {
            label: 'Navigation Three - Submenu',
            key: 'SubMenu',
            children: [
                {
                    type: 'group',
                    label: 'Item 1',
                    children: [
                        {
                            label: 'Option 1',
                            key: 'setting:1',
                        },
                        {
                            label: 'Option 2',
                            key: 'setting:2',
                        },
                    ],
                },
                {
                    type: 'group',
                    label: 'Item 2',
                    children: [
                        {
                            label: 'Option 3',
                            key: 'setting:3',
                        },
                        {
                            label: 'Option 4',
                            key: 'setting:4',
                        },
                    ],
                },
            ],
        },
        {
            label: (
                <a href="https://ant.design" target="_blank" rel="noopener noreferrer">
                    Navigation Four - Link
                </a>
            ),
            key: 'alipay',
        },
    ];


    const onSelectDropDown = (event: { key: string }) => {
        let {key} = event
        ensureLoaded(key)
        console.log(indexedPages[key])
        setCurrentPage(indexedPages[key])
    }

    const [currentPage, setCurrentPage] = useState(indexedPages[data.defaultPage])
    let dropdownMenu = (<Menu items={menu} onClick={onSelectDropDown}/>)

    ee.emit(Event.QUERY, 1, ee);

    const onSelect = (eventKey: string | null) => {
        if (eventKey === undefined || eventKey == null || eventKey === currentPage.key) {
            return;
        }
        ensureLoaded(eventKey)
        setCurrentPage(indexedPages[eventKey])
    }

    return (<>
        <Navbar defaultValue={"HelloWorld"} onSelect={onSelect} bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Navbar</Navbar.Brand>
                <Nav className="me-auto">
                    {data.pages.map(page => {
                        return <Nav.Link eventKey={page.key}>{page.title}</Nav.Link>
                    })}
                </Nav>
            </Container>
        </Navbar>
        <Dropdown overlay={dropdownMenu}>
            <a>Hover me</a>
        </Dropdown>
        <div>
            {currentPage.comp}
        </div>
    </>);
}

export default App;
