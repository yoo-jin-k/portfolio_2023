import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {Col, Grid, Row, Layout, Typography, Button} from 'antd';
// import {t} from '@lingui/macro';
// import cloud from '../../assets/Cloud1.png';

import Project from '../project/Project';
import Contact from '../contact/Contact';
import OngoingProject from "../OngoingProject/OngoingProject";

const {Header, Content, Footer} = Layout;
const {Title} = Typography;
const {useBreakpoint} = Grid;

const Home = () => {
    const screens = useBreakpoint();
    const {xs: isXs} = screens;
    const {md: isMd} = screens;
    return (
        <>
            <Content className={'site-layout'}>
                <div className={'container menu_home'}>
                    <Row justify={"center"}>
                        <Col flex={"stretch"}>
                            <h2>
                                안녕하세요
                            </h2>
                        </Col>
                        <Col>
                            <h4>
                                비즈니스의 성장이 곧 나의 성장이라 생각하는 BE 개발자 김유진입니다.
                            </h4>
                        </Col>
                    </Row>

                    {/*보유기술*/}
                    <Row>

                    </Row>

                    <OngoingProject/>

                    <Project/>

                    <Contact/>

                </div>
            </Content>
        </>
    );
};
export default Home;
