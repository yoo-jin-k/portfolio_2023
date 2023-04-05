import React, { useEffect,useState } from 'react';
import { Col, Grid, Row, Layout, Typography, Divider, Carousel, Card, Modal, Button, Image } from 'antd';
import { LeftOutlined, RightOutlined, SettingOutlined, EllipsisOutlined } from "@ant-design/icons";
// import { t } from '@lingui/macro';
import petner from '../../assets/petner_m_img.png';
import MOONGKLE from '../../assets/MOONGKLE.png';
import basicblog from '../../assets/basicblog.jpg';
import nerdy from '../../assets/nerdy.png';
import preparing from '../../assets/preparing.png';
import library from '../../assets/library.png';

import ModalLayout from '../../components/layout/ModalLayout';
import '../../components/style/project.scss';
import PetnerInfo from './components/PetnerInfo';
import MoongKleInfo from './components/MoongKleInfo';
import NerdyInfo from "./components/NerdyInfo";
import BasicBlogInfo from "./components/BasicBlogInfo";
import LibraryInfo from './components/LibraryInfo';

const {Content} = Layout;
const { Title,Text } = Typography;
const { useBreakpoint } = Grid;

const contentStyle: React.CSSProperties = {
    height: 'auto',
    color: '#fff',
    textAlign: 'center',
    // background: '#364d79',
    // padding: '20px',
    borderRadius: '8px'
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
                                    // autoplay
                                >
                                    <Col>
                                        <Row  justify={'space-between'} gutter={16}>
                                            <Col span={8} style={contentStyle} className={'contentStyle'} onClick={() => setProject1(true)}>
                                                    <Image
                                                        src={petner}
                                                        preview={false}
                                                    />
                                                    <div className="content">
                                                        <h1>Petner</h1>
                                                        <p>애완동물 매칭 서비스 플랫폼</p>
                                                    </div>
                                            </Col>
                                            <Col span={8} style={contentStyle} className={'contentStyle'} onClick={() => setProject2(true)}>
                                                <Image
                                                    src={library}
                                                    preview={false}
                                                />
                                                <div className="content">
                                                    <h1>Library App</h1>
                                                    <p>개인 도서관리 프로젝트</p>
                                                </div>
                                            </Col>
                                            <Col span={8} style={contentStyle} className={'contentStyle'} onClick={() => setProject3(true)}>
                                                <Image
                                                    src={basicblog}
                                                    preview={false}
                                                />
                                                <div className="content">
                                                    <h1>Basicblog</h1>
                                                    <p>개인 Blog 프로젝트</p>
                                                </div>
                                            </Col>
                                        </Row>
                                    </Col>
                                    <Col>
                                        <Row justify={'space-between'}>
                                            <Col span={8} style={contentStyle} className={'contentStyle'} onClick={() => setProject4(true)}>
                                                <Image
                                                    src={nerdy}
                                                    preview={false}
                                                />
                                                <div className="content">
                                                    <h1>Nerdy</h1>
                                                    <p>널디 클론코딩</p>
                                                </div>
                                            </Col>
                                            <Col span={8} style={contentStyle} className={'contentStyle'} onClick={() => setProject5(true)}>
                                                <Image
                                                    src={MOONGKLE}
                                                    preview={false}
                                                />
                                                <div className="content">
                                                    <h1>MOONGKLE</h1>
                                                    <p>MOONGKLE 클론코딩</p>
                                                </div>
                                            </Col>
                                            <Col span={8} style={contentStyle} className={'contentStyle'} >
                                                <Image
                                                    src={preparing}
                                                    preview={false}
                                                />
                                                <div className="content">
                                                    <h1>Preparing</h1>
                                                    <p>준비중</p>
                                                </div>
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
                                        <Row gutter={[0,16]}>
                                            <Col span={24} style={contentStyle} className={'contentStyle'} onClick={() => setProject1(true)}>
                                                <Image
                                                    src={petner}
                                                    preview={false}
                                                />
                                                <div className="content">
                                                    <h1>Petner</h1>
                                                    <p>애완동물 매칭 서비스 플랫폼</p>
                                                </div>
                                            </Col>
                                            <Col span={24} style={contentStyle} className={'contentStyle'} onClick={() => setProject2(true)}>
                                                <Image
                                                    src={library}
                                                    preview={false}
                                                />
                                                <div className="content">
                                                    <h1>Library App</h1>
                                                    <p>개인 도서관리 프로젝트</p>
                                                </div>
                                            </Col>
                                            <Col span={24} style={contentStyle} className={'contentStyle'} onClick={() => setProject3(true)}>
                                                <Image
                                                    src={basicblog}
                                                    preview={false}
                                                />
                                                <div className="content">
                                                    <h1>Basicblog</h1>
                                                    <p>개인 Blog 프로젝트</p>
                                                </div>
                                            </Col>
                                            <Col span={24} style={contentStyle} className={'contentStyle'} onClick={() => setProject4(true)}>
                                                <Image
                                                    src={nerdy}
                                                    preview={false}
                                                />
                                                <div className="content">
                                                    <h1>Nerdy</h1>
                                                    <p>Nerdy 클론코딩</p>
                                                </div>
                                            </Col>
                                            <Col span={24} style={contentStyle} className={'contentStyle'} onClick={() => setProject5(true)}>
                                                <Image
                                                    src={MOONGKLE}
                                                    preview={false}
                                                />
                                                <div className="content">
                                                    <h1>MOONGKLE</h1>
                                                    <p>MOONGKLE 클론코딩</p>
                                                </div>
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
                    <LibraryInfo/>
                </ModalLayout>
                <ModalLayout visible={project3} onOk={handleOk} onCancel={handleCancel} >
                    <BasicBlogInfo/>
                </ModalLayout>
                <ModalLayout visible={project4} onOk={handleOk} onCancel={handleCancel} >
                    <NerdyInfo/>
                </ModalLayout>
                <ModalLayout visible={project5} onOk={handleOk} onCancel={handleCancel} >
                    <MoongKleInfo/>
                </ModalLayout>
                <ModalLayout visible={project6} onOk={handleOk} onCancel={handleCancel} >
                    <NerdyInfo/>
                </ModalLayout>
                
            </Content>
        </>
    );
};


export default Project;
