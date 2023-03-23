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
    theme, Drawer
} from 'antd';
import type { DrawerProps, RadioChangeEvent } from 'antd';
import {
    LogoutOutlined,
    CustomerServiceOutlined,
    MenuOutlined,
    MenuFoldOutlined,
    CloseOutlined
} from '@ant-design/icons';
import AppRoute from './AppRoute';
import type {MenuProps} from 'antd';

import logo from '../../assets/cloud_Logo.png';

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
    const [toggleMenu, setToggleMenu] = useState(false);
    const [toggleBar, setToggleBar] = useState(true);

    const [open, setOpen] = useState(false);


    const showDrawer = () => {
        setOpen(true);
    };

    const onClose = () => {
        setOpen(false);
    };

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
            <Header style={{backgroundColor: 'transparent', position: 'sticky', top: 0, zIndex: 1}}>
                <div>
                <Link to="/" className={'logo'}>
                    <div style={{
                        float: 'left',
                        height: '31px',
                        margin: '16px 24px 16px 0',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center'
                    }}>
                        <img src={logo} alt={'cloud_logo'} width={60}/>
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
                            width: 370
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

                            <Button type="primary" onClick={showDrawer} className={'toggle_mo'} >
                                {toggleBar ? <MenuOutlined/> : <CloseOutlined/>}
                            </Button>
                            <Drawer placement="top" open={open} closable={false}
                                    onClose={onClose}
                            >

                                <Row justify={'end'}>
                                    <CloseOutlined onClick={onClose} style={{padding: '0 10px'}}/>
                                </Row>

                                <Menu

                                    className={'toggle_menu'}
                                    style={{border:'none'}}
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
                            </Drawer>
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
                </div>
            </Header>
            <AppRoute/>
        </>
    );
};


export default AppHeader;




