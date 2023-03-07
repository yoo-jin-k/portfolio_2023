import React, {useState} from 'react';
import {BrowserRouter as Router, Route, Routes, Link} from "react-router-dom";
import {
    Badge,
    Button,
    Col,
    Modal,
    Layout,
    Row,
    FloatButton,
    Space,
    Typography,
    Tooltip,
    Grid,
    Breadcrumb,
    Menu,
    theme
} from 'antd';
import {
    LogoutOutlined,
    CustomerServiceOutlined,
    MenuOutlined,
    MenuFoldOutlined,
    CloseOutlined
} from '@ant-design/icons';
import AppRoute from './AppRoute';
import type {MenuProps} from 'antd';

const {Header} = Layout;
const {Text} = Typography;
const {useBreakpoint} = Grid;

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
): MenuItem {
    return {
        label,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem(
        <Link to="/">
            <Menu.Item>home</Menu.Item>
        </Link>
    ),
    getItem(
        <Link to="/about">
            <Menu.Item>about</Menu.Item>
        </Link>
    ),
    getItem(
        <Link to="/project">
            <Menu.Item>project</Menu.Item>
        </Link>
    ),
    getItem(
        <Link to="/contact">
            <Menu.Item>contact</Menu.Item>
        </Link>
    )
];


const AppHeader = (props: { collapsed: boolean }) => {
    const {collapsed} = props;
    const [toggleMenu, setToggleMenu] = useState(false)
    const [toggleBar, setToggleBar] = useState(true)

    const toggleChange = () => {
        setToggleMenu(!toggleMenu)
        setToggleBar(!toggleBar)
    }

    const onMenuClick = () => {
        setToggleMenu(!toggleMenu)
        setToggleBar(!toggleBar)
    }

    const screens = useBreakpoint();
    const {xs: isXs} = screens;
    const {md: isMd} = screens;

    const {
        token: {colorBgContainer},
    } = theme.useToken();
    return (
        <>
            <Header style={{backgroundColor: 'transparent', position: 'sticky', top: 0, zIndex: 99999999}}>
                <Link to="/" className={'logo'}>
                    <div style={{
                        float: 'left',
                        height: '31px',
                        margin: '16px 24px 16px 0',
                        // background: 'rgba(255, 255, 255, 0.3)',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <h1>940811</h1>
                    </div>
                </Link>
                {isMd ?
                    <Menu
                        mode="horizontal"
                        overflowedIndicator={<MenuOutlined style={{color: '#fff'}}/>}
                        triggerSubMenuAction={'click'}
                        className={'menu_list'}
                        // items={items}
                        style={{
                            backgroundColor: 'rgba(133,112,112,0)',
                            display: 'flex',
                            justifyContent: 'end',
                            width: 500
                        }}
                    >
                        <Link to="/">
                            <Menu.Item>home</Menu.Item>
                        </Link>
                        <Link to="/about">
                            <Menu.Item>about</Menu.Item>
                        </Link>
                        <Link to="/project">
                            <Menu.Item>project</Menu.Item>
                        </Link>
                        <Link to="/contact">
                            <Menu.Item>contact</Menu.Item>
                        </Link>
                    </Menu>
                    :
                    (<>
                        <div>
                            <Button type="primary" onClick={toggleChange} style={{marginBottom: 16}}
                                    className={'toggle_mo'}>
                                {toggleBar ? <MenuOutlined/> : <CloseOutlined/>}
                            </Button>
                        </div>
                        {toggleMenu &&
                            <Menu
                                defaultSelectedKeys={['1']}
                                mode="inline"
                                theme="light"
                                inlineCollapsed={toggleBar}
                                onClick={onMenuClick}
                                // className={'menu_list'}
                                className={'toggle_menu'}
                            >
                                <Link to="/">
                                    <Menu.Item>home</Menu.Item>
                                </Link>
                                <Link to="/about">
                                    <Menu.Item>about</Menu.Item>
                                </Link>
                                <Link to="/project">
                                    <Menu.Item>project</Menu.Item>
                                </Link>
                                <Link to="/contact">
                                    <Menu.Item>contact</Menu.Item>
                                </Link>
                            </Menu>
                        }</>)}
            </Header>
            <AppRoute/>
        </>
    );
};


export default AppHeader;




