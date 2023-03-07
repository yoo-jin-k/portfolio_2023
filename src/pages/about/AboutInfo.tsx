import {Link} from "react-router-dom";
import {Col, Grid, Row, Typography, Button, Divider} from 'antd';
import {UserOutlined, HomeOutlined, MailOutlined, GithubOutlined} from '@ant-design/icons';
import my_img from '../../assets/my_img.jpg';
import '../../components/style/about.scss';
import Education from './Education';
import Career from './Career';
import Skills from './Skills';
import React from "react";

const {Title, Text} = Typography;
const {useBreakpoint} = Grid;

const AboutInfo = () => {
    const screens = useBreakpoint();
    const {md: isMd} = screens;
    return (
        <>
            <Row>
                <Col span={isMd ? 8 : 24} className={'about_left'}>
                    <Row>
                        <Col span={24} style={{borderRadius: 10, overflow: 'hidden', marginBottom: 20}}>
                            <img src={my_img} alt={'my_img'} width={'100%'} style={{display: 'flex'}}/>
                        </Col>
                    </Row>
                    <Row>
                        <Title level={4} className={'logo'}><span className={'point_color'}>94</span>0811</Title>
                    </Row>
                    <Row style={{marginBottom: 20}}>
                        간단한 소개글
                    </Row>
                    <Row className={'icon_group'}>
                        <Col span={24}><UserOutlined className={'point_color'}/> Yoojin, Kim</Col>
                        <Divider/>
                        <Col span={24}><HomeOutlined className={'point_color'}/> Gyeonggi-do, South Korea</Col>
                        <Divider/>
                        <Col span={24}><MailOutlined className={'point_color'}/> dbwls.g4o8@gmail.com</Col>
                        <Divider/>
                        <Col span={24}><GithubOutlined className={'point_color'}/> github.com/yoo-jin-k</Col>
                    </Row>
                    <Row style={{margin: '25px 0'}}>
                        {/* to mail*/}
                        <Link to="/contact" style={{width: '100%'}}>
                            <Button size="large" shape="round" id={'main_btn'} style={{width: '100%'}}>Get in
                                Touch</Button>
                        </Link>
                    </Row>
                </Col>
                <Col span={isMd ? 16 : 24} className={'about_right'}>
                    <Row>
                        <Col span={24}>
                            <Title level={4} className={'about_title'}>About <span
                                className={'point_color'}>Me</span></Title>
                            <Divider dashed={true}/>
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
                            {/* 학력 */}
                            <Title level={4} className={'about_title'}>Education <span
                                className={'point_color'}>Timeline</span></Title>
                            <Divider dashed={true}/>
                            <Education/>
                        </Col>

                        <Col span={24}>
                            {/*경력*/}
                            <Title level={4} className={'about_title'}>Career <span
                                className={'point_color'}>Timeline</span></Title>
                            <Divider dashed={true}/>
                            <Career/>
                        </Col>

                        <Col span={24}>
                            {/*skills*/}
                            <Title level={4} className={'about_title'}>My <span className={'point_color'}>Skills</span></Title>
                            <Divider dashed={true}/>
                            <Skills/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
};

export default AboutInfo;
