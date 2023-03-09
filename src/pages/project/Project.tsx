import React, { useEffect,useState } from 'react';
import { Col, Grid, Row, Layout, Typography, Divider, Carousel, Card, Modal, Button } from 'antd';
import { LeftOutlined, RightOutlined, SettingOutlined, EllipsisOutlined } from "@ant-design/icons";
// import { t } from '@lingui/macro';
import petner from '../../assets/petner_m_img.png';
import MOONGKLE from '../../assets/MOONGKLE.png';
import basicblog from '../../assets/basicblog.jpg';
import nerdy from '../../assets/nerdy.png';
import preparing from '../../assets/preparing.png';
import ModalLayout from '../../components/layout/ModalLayout';
import '../../components/style/project.scss';
import PetnerInfo from './components/PetnerInfo';
import MoongKleInfo from './components/MoongKleInfo';
import NerdyInfo from "./components/NerdyInfo";
import BasicBlogInfo from "./components/BasicBlogInfo";

const {Content} = Layout;
const { Title,Text } = Typography;
const { useBreakpoint } = Grid;

const contentStyle: React.CSSProperties = {
    height: 'auto',
    color: '#fff',
    textAlign: 'center',
    // background: '#364d79',
};

const { Meta } = Card;


const Project = () => {
    const screens = useBreakpoint();
    const { xs: isXs } = screens;
    const { md: isMd } = screens;
    const [project1, setProject1] = useState(false);
    const [project2, setProject2] = useState(false);
    const [project3, setProject3] = useState(false);
    const [project4, setProject4] = useState(false);
    const [project5, setProject5] = useState(false);
    const [project6, setProject6] = useState(false);
    const showModal = () => {
        setProject1(true);
        setProject2(true);
        setProject3(true);
        setProject4(true);
        setProject5(true);
        setProject6(true);
    };
    const handleOk = () => {
        setProject1(false);
        setProject2(false);
        setProject3(false);
        setProject4(false);
        setProject5(false);
        setProject6(false);
    };

    const handleCancel = () => {
        setProject1(false);
        setProject2(false);
        setProject3(false);
        setProject4(false);
        setProject5(false);
        setProject6(false);
    };

    return (
        <>
            <Content className={'site-layout'}>
                <div className={'container menu_about'}>
                    <Row>
                        <Col span={24} className={'project_md'}>
                            <Title level={2}>
                                Project <span className={'point_color'}>Portfolio</span>
                            </Title>
                            <Text></Text>
                            <Divider/>
                            <Row className={'project_info'}>
                                {isMd?
                                <Carousel
                                    arrows prevArrow={<LeftOutlined className={'left'} color={'#fff'}/>} nextArrow={<RightOutlined  className={'left'}/>}
                                    autoplay
                                >
                                    <Col>
                                        <Row gutter={32} justify={'space-between'}>
                                            <Col span={8} style={contentStyle} onClick={() => setProject1(true)}>
                                                <Card
                                                    hoverable
                                                    style={{ width: '100%',height: '100%' }}
                                                    cover={<img alt="example" src={petner} />}
                                                >
                                                </Card>
                                            </Col>
                                            <Col span={8} style={contentStyle} onClick={() => setProject2(true)}>
                                                <Card
                                                    hoverable
                                                    style={{ width: '100%',height: '100%' }}
                                                    cover={<img alt="example" src={basicblog} />}
                                                >
                                                </Card>
                                            </Col>
                                            <Col span={8} style={contentStyle} onClick={() => setProject3(true)}>
                                                <Card
                                                    hoverable
                                                    style={{ width: '100%',height: '100%' }}
                                                    cover={<img alt="example" src={nerdy} />}
                                                >
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col>
                                        <Row gutter={32} justify={'space-between'}>
                                            <Col span={8} style={contentStyle} onClick={() => setProject4(true)}>
                                                <Card
                                                    hoverable
                                                    style={{ width: '100%',height: '100%' }}
                                                    cover={<img alt="example" src={MOONGKLE} />}
                                                >
                                                </Card>
                                            </Col>
                                            <Col span={8} style={contentStyle} >
                                                <Card
                                                    hoverable
                                                    style={{ width: '100%',height: '100%' }}
                                                    cover={<img alt="example" src={preparing} />}
                                                >
                                                </Card>
                                            </Col>
                                            <Col span={8} style={contentStyle} >
                                                <Card
                                                    hoverable
                                                    style={{ width: '100%',height: '100%' }}
                                                    cover={<img alt="example" src={preparing} />}
                                                >
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col>
                                        <h3 style={contentStyle}>3</h3>
                                    </Col>
                                    <Col>
                                        <h3 style={contentStyle}>4</h3>
                                    </Col>
                                </Carousel>
                                    :
                                    <Col span={24} className={'project_md_info'}>
                                        <Row gutter={[0,32]}>
                                            <Col span={24} style={contentStyle} onClick={() => setProject1(true)}>
                                                <Card
                                                    hoverable
                                                    style={{ width: '100%',height: '100%' }}
                                                    cover={<img alt="example" src={petner} />}
                                                >
                                                </Card>
                                            </Col>
                                            <Col span={24} style={contentStyle} onClick={() => setProject2(true)}>
                                                <Card
                                                    hoverable
                                                    style={{ width: '100%',height: '100%' }}
                                                    cover={<img alt="example" src={basicblog} />}
                                                >
                                                </Card>
                                            </Col>
                                            <Col span={24} style={contentStyle} onClick={() => setProject3(true)}>
                                                <Card
                                                    hoverable
                                                    style={{ width: '100%',height: '100%' }}
                                                    cover={<img alt="example" src={nerdy} />}
                                                >
                                                </Card>
                                            </Col>
                                            <Col span={24} style={contentStyle} onClick={() => setProject4(true)}>
                                                <Card
                                                    hoverable
                                                    style={{ width: '100%',height: '100%' }}
                                                    cover={<img alt="example" src={MOONGKLE} />}
                                                >
                                                </Card>
                                            </Col>
                                        </Row>
                                    </Col>
                                }

                            </Row>
                        </Col>
                    </Row>

                </div>
                <ModalLayout visible={project1} onOk={handleOk} onCancel={handleCancel}>
                    <PetnerInfo/>
                </ModalLayout>
                <ModalLayout visible={project2} onOk={handleOk} onCancel={handleCancel} >
                    <BasicBlogInfo/>
                </ModalLayout>
                <ModalLayout visible={project3} onOk={handleOk} onCancel={handleCancel} >
                    <NerdyInfo/>
                </ModalLayout>
                <ModalLayout visible={project4} onOk={handleOk} onCancel={handleCancel} >
                    <MoongKleInfo/>
                </ModalLayout>
                <ModalLayout visible={project5} onOk={handleOk} onCancel={handleCancel} >
                    <NerdyInfo/>
                </ModalLayout>
                <ModalLayout visible={project6} onOk={handleOk} onCancel={handleCancel} >
                    <NerdyInfo/>
                </ModalLayout>
            </Content>
        </>
    );
};


export default Project;
