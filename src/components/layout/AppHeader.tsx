import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Badge, Button, Col,Modal, Layout, Row,FloatButton, Space, Typography, Tooltip, Grid ,Breadcrumb, Menu, theme } from 'antd';
import { LogoutOutlined, CustomerServiceOutlined, MenuOutlined } from '@ant-design/icons';
// import { Trans, t } from '@lingui/macro';


import AppRoute from './AppRoute';
import {Link} from "react-router-dom";
const { Header } = Layout;
const { Text } = Typography;
const { useBreakpoint } = Grid;


 const AppHeader = (props: { collapsed: boolean }) => {
    const { collapsed } = props;
    // const { account, walletContext, chainId, chainName } = useWeb3();
    const screens = useBreakpoint();
    const { xs: isXs } = screens;
     const { sm: isSm } = screens;

    const {
        token: { colorBgContainer },
    } = theme.useToken();

     // /////



     return (
        <>
            <Header style={{ backgroundColor:'transparent',position: 'sticky', top: 0, zIndex: 1 }}>
                <Link to="/" className={'logo'}>
                <div style={{float: 'left',
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

                <Menu
                    mode="horizontal"
                    overflowedIndicator={<MenuOutlined style={{color:'#fff'}} />}
                    triggerSubMenuAction={'click'}
                    className={'menu_list'}
                    style={{backgroundColor:'rgba(133,112,112,0)',display: 'flex', justifyContent: 'flex-end',width: isXs?50:'auto',float: isXs?'right':'none'}}
                >
                    <Menu.Item key="/"><Link to="/">home</Link></Menu.Item>
                    <Menu.Item ><Link to="/about">about</Link></Menu.Item>
                    <Menu.Item ><Link to="/project">project</Link></Menu.Item>
                    <Menu.Item ><Link to="/contact">contact</Link></Menu.Item>
                </Menu>

            </Header>

            <AppRoute/>

        </>
    );
};




export default AppHeader;



