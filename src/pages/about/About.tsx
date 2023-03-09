import React, { useEffect, useState } from 'react';
import { Col, Grid, Row, Typography, Layout, Button, Divider, Modal } from 'antd';
// import { t } from '@lingui/macro';
import my_img from '../../assets/my_img.jpg';
import AboutInfo from './AboutInfo';
import ModalLayout from '../../components/layout/ModalLayout';
import SubTitle from "../../components/layout/SubTitle";
const {Header, Content, Footer} = Layout;
const { useBreakpoint } = Grid;
const { Title,Text } = Typography;
const About = () => {
    const screens = useBreakpoint();
    const { xs: isXs } = screens;
    const { md: isMd } = screens;
    const [isModalOpen, setIsModalOpen] = useState(false);

    const showModal = () => {
        setIsModalOpen(true);
    };
    const handleOk = () => {
        setIsModalOpen(false);
    };

    const handleCancel = () => {
        setIsModalOpen(false);
    };
    return (
        <>
            <Content className={'site-layout'}>
                <div className={'container menu_about'}>
                    <Row>
                        <Col span={24} className={'project_md'}>
                    <Row justify={'space-between'}>
                        {/* img */}
                        <Col span={isMd?9:24}>
                            <img src={my_img} alt={'my_img'} width={'100%'} style={{display:'flex',borderRadius:10}}/>
                        </Col>

                        <Col span={isMd?13:24}>
                            <Row>
                                <Col span={24}>
                                    <Title level={2} className={'logo'}><span className={'point_color'}>94</span>0811</Title>
                                    {/*<SubTitle/>*/}
                                    <Title level={5} className={'sub_title'}>
                                        A person who continues to develop
                                    </Title>
                                </Col>
                                <Col span={24}>
                                    <Divider/>
                                </Col>
                                <Col span={24}>
                                    <Text>
                                        안녕하세요, 저는 백엔드 개발자 김유진입니다.<br/>
                                        현재 저는 백엔드 개발에 큰 관심을 가지고 있으며<br/>
                                        퍼블리싱으로 시작해 백엔드에 관심이 생겨 <br/>
                                        나아가는 과정에서 많은 노력과 열정을 쏟고 있습니다.<br/>
                                        다른 분들보다 조금 늦게 개발에 입문했기 때문에 <br/>
                                        더욱더 열심히 공부하고 성장하려고 합니다.<br/>
                                        개발이라는 분야에서는 자신감과 열정, 그리고 꾸준한 노력이 필요한 것 같습니다.<br/>
                                        그리고 이 모든 것을 가지고 도전하는 자세를 갖추어야 한다고 생각합니다.<br/>
                                        앞으로도 계속해서 노력하고 더욱 가치있는 개발자가 되기 위해 노력하겠습니다.<br/>
                                        좋아하는 일을 즐기면서 잘하는 것, 끈임없는 도전<br/>
                                        제가 꿈꾸는 저의 모습입니다 :)
                                    </Text>
                                </Col>
                                <Col span={24}>
                                    <Button type="primary" size="large" shape="round" id={'main_btn'} style={{marginTop:20,padding:'0 25px'}} onClick={showModal}>
                                        Learn More
                                    </Button>
                                </Col>
                            </Row>

                        </Col>
                    </Row>
                        </Col>
                    </Row>
                </div>

                <ModalLayout visible={isModalOpen} onOk={handleOk} onCancel={handleCancel} >
                    <AboutInfo/>
                </ModalLayout>
            </Content>
        </>
    );
};
export default About;
