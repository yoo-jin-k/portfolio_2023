import React, {useState} from 'react';
import {BrowserRouter} from 'react-router-dom';
import {Grid, Layout, ConfigProvider, Button} from 'antd';

import AppHeader from './AppHeader';

import '../style/Background.scss';
import '../style/AppLayout.scss';
import '../style/AppLayout.js';

const {useBreakpoint} = Grid;
const { Content, Footer } = Layout;
const AppLayout = () => {
    const [collapsed, setCollapsed] = useState(false);

    const screens = useBreakpoint();
    const {xs: isXs} = screens;

    const onCollapse = () => {
        setCollapsed(!collapsed);
    };

    return (
        <Layout style={{minHeight: '100vh'}}>
            <div className={'background'}>
                {/* background star */}
                <div className="noite"></div>
                <div className="constelacao"></div>
                <div className="chuvaMeteoro"></div>
                {/*******/}
            </div>
            <AppHeader collapsed={collapsed}/>
            {/* layout grid */}
            <Footer/>
        </Layout>
    );
};

export default AppLayout;
