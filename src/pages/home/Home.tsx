import React, {useEffect} from 'react';
import {Link} from "react-router-dom";
import {Col, Grid, Row, Layout, Typography, Button} from 'antd';
// import {t} from '@lingui/macro';
import cloud from '../../assets/Cloud1.png'
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
                    <Row>
                        <Col span={isMd ? 12: 24} order={isMd ? 0 : 1} style={{alignItems: 'center', display: 'flex',justifyContent : isMd ? 'start' : 'center'}} className={'main_text'}>
                            <Row justify={isMd ? 'start' : 'center'} style={{flexDirection: 'column', alignItems: isMd ? 'start' : 'center', justifyContent: isMd ? 'start':'center'}}>
                                <Col>
                                    <Title className={'home_title logo'}><span className={'point_color'}>94</span>0811</Title>
                                </Col>
                                <Col>
                                    <h3 className={'home_sub'}>
                                        A person who
                                        continues to develop
                                    </h3>
                                </Col>
                                <Col>
                                    <Link to="/contact">
                                        <Button type="primary" shape="round" size="large" id={'main_btn'}
                                                style={{marginTop: 20, padding: '0 25px',width: '200px', height: '50px'}}>
                                            Get in Touch
                                        </Button>
                                    </Link>
                                </Col>
                            </Row>
                        </Col>
                        <Col span={isMd ? 12: 24} order={isMd ? 1 : 0} className={'wrap'}>
                            <img src={cloud} alt={'bg_cloud'} width={'100%'} className={'cloud_img'} />
                        </Col>
                    </Row>

                </div>
            </Content>
        </>
    );
};
export default Home;
