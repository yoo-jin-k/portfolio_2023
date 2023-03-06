import React from 'react';
import { Col, Grid, Row, Typography, Layout, Button, Divider, Modal } from 'antd';

import Email from './Email';
import {GithubOutlined, HomeOutlined, MailOutlined, UserOutlined} from "@ant-design/icons";
import '../../components/style/contact.scss';
const {Header, Content, Footer} = Layout;
const { Title,Text } = Typography;
const { useBreakpoint } = Grid;

const Contact = () => {
    const screens = useBreakpoint();
    const { md: isMd } = screens;
    return (
        <>
            <Content className={'site-layout'}>
                <div className={'container menu_about'}>
                    <Row>
                        <Col span={24} className={'project_md'}>
                            <Title level={2}>
                                Get in<span className={'point_color'}> Touch</span>
                            </Title>
                            <Divider/>
                            <Row className={'project_info'}>
                                <Col span={24}>
                                    <Row gutter={[isMd?32:0,isMd?0:32]}>
                                        <Col span={isMd?12:24} className={'contact_info1'}>
                                            <Row gutter={[0,16]}>
                                                <Col span={24}>
                                                    <Button block size="large" type="primary"><UserOutlined className={'point_color'}/> Yoojin, Kim</Button>
                                                </Col>
                                                <Col span={24}>
                                                    <Button block size="large" type="primary"><HomeOutlined className={'point_color'} /> Gyeonggi-do, South Korea</Button>
                                                </Col>
                                                <Col span={24}>
                                                    <Button block size="large" type="primary" href={'mailto:dbwls_0811@naver.com'}><MailOutlined className={'point_color'} /> dbwls.g4o8@gmail.com</Button>
                                                </Col>
                                                <Col span={24}>
                                                    <Button block size="large" type="primary" href={'https://github.com/yoo-jin-k'}><GithubOutlined className={'point_color'} /> github.com/yoo-jin-k</Button>
                                                </Col>
                                            </Row>
                                        </Col>
                                        <Col span={isMd?12:24} className={'contact_info2'}>
                                            <Email />
                                        </Col>
                                    </Row>
                                </Col>

                            </Row>
                        </Col>
                    </Row>
                </div>
            </Content>
        </>
    );
};
export default Contact;
