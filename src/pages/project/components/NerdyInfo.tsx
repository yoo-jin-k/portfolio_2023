import {Row, Col, Typography, Collapse, theme, Grid, Button, Divider,Tag} from 'antd';
import { CaretRightOutlined, PushpinOutlined, LinkOutlined } from '@ant-design/icons';
import nerdy_main from '../../../assets/nerdy/nerdy_mac_img.png';
import img1 from '../../../assets/nerdy/img1.png';
import img2 from '../../../assets/nerdy/img2.png';
const { Title, Text } = Typography;
const { Panel } = Collapse;
const { useBreakpoint } = Grid;

const NerdyInfo = () => {
    const screens = useBreakpoint();
    const { md: isMd } = screens;
    const { token } = theme.useToken();
    const panelStyle = {
        marginBottom: 24,
        background: '#3c3c3c',
        borderRadius: token.borderRadiusLG,
        border: 'none',
    };
    return (
        <>
            <Row>
                <Col span={24}>
                    <Row>
                        <Col span={24} style={{marginBottom:30}}>
                            <Title level={2} style={{marginBottom:4}}>
                                NERDY Renewal Project
                            </Title>
                            <Row justify={'space-between'} style={{alignItems:'end'}}>
                                <Col>
                                    <Text>
                                        널디 쇼핑몰 리뉴얼 프로젝트<br/><br/>
                                        <span style={{color:'#9b9b9b',marginBottom:10,display:'flex'}}>
                                            Design - 4day<br/>
                                            Publishing - 5day<br/>
                                            pc(1920*1050), mobile(375*812)
                                        </span>
                                        <Tag color="green">Html5</Tag> <Tag color="gold">Css3</Tag>
                                        <Tag color="volcano">XD</Tag> <Tag color="cyan">jQuery</Tag>
                                    </Text>
                                </Col>
                                <Col>
                                    <Button size="middle" shape="round" href={'https://yoo-jin-k.github.io/NERDY.githun.io/'} id={'main_btn'} style={{marginTop:isMd?0:15}}>Github <LinkOutlined style={{color:'#fff'}}/></Button>
                                </Col>
                            </Row>
                        </Col>
                        <Divider/>
                        <Col span={24} style={{marginBottom:20}}>
                            <img src={nerdy_main} alt={'nerdy_main'} width={'100%'}/>
                        </Col>
                        {/**/}
                        <Col span={24}>

                            <Collapse
                                bordered={false}
                                defaultActiveKey={['0']}
                                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                                className={'project_collapse'}
                            >
                                <Panel header={<Title level={5} className={'panel_title'}>프로젝트 소개</Title>} key="1" style={panelStyle}>
                                    <Row>
                                        <Col span={24}>
                                            <Text>
                                                기존의 복잡한 레이아웃을 심플하고 깔끔한 레이아웃으로 재구성.<br/>
                                                웹접근성과 가독성 확보.<br/>
                                                디자인된 레이아웃을 탄탄하고 조직적인 HTML로 구현.
                                            </Text>
                                        </Col>
                                    </Row>
                                </Panel>
                                <Panel header={<Title level={5} className={'panel_title'}>상세작업</Title>} key="2" style={panelStyle}>
                                    <Row>
                                        <Col span={24}>
                                            <Title level={5}><PushpinOutlined /> 규칙성</Title>
                                            <img src={img1} alt={'info_1'} width={'100%'}/><br/>
                                            <Text>header 부분을 그리드로 이용하여 규칙성있게 나타내었습니다.</Text>
                                        </Col>
                                        <Divider className={'original'}/>
                                        <Col span={24}>
                                            {isMd?
                                                <Row>
                                                    <Col span={12}>
                                                        <Title level={5}><PushpinOutlined /> 모바일 사용자를 생각합니다</Title>
                                                        <Text>
                                                            젊은 사용자층이 타겟이므로<br/>
                                                            모바일을 우선순위로 기준을 두고 디자인 했습니다.
                                                        </Text>
                                                    </Col>
                                                    <Col span={12}>
                                                        <img src={img2} alt={'img2'} width={'100%'} style={{marginTop:30}}/>
                                                    </Col>
                                                </Row> :
                                                <Row>
                                                    <Col span={24}>
                                                        <Title level={5}><PushpinOutlined /> 모바일 사용자를 생각합니다</Title>
                                                        <img src={img2} alt={'img2'} width={isMd?'250px':'100%'}/><br/>
                                                        <Text>
                                                            젊은 사용자층이 타겟이므로<br/>
                                                            모바일을 우선순위로 기준을 두고 디자인 했습니다.
                                                        </Text>
                                                    </Col>
                                                </Row>
                                            }

                                        </Col>
                                    </Row>
                                </Panel>

                                <Panel header={<Title level={5} className={'panel_title'}>Style Guide</Title>} key="3" style={panelStyle}>
                                    <Row>
                                        <Col span={24}>
                                            <Title level={5} ><PushpinOutlined /> Keyword</Title>
                                            <Text>
                                                #깔끔한 #활발한 #생기있는
                                            </Text>
                                        </Col>
                                        <Col span={24}>
                                            <Title level={5} ><PushpinOutlined /> Color</Title>
                                            {isMd?
                                                <Text className={'nerdy_colorGuid'}>
                                                    <span></span> #000000  <span></span> #9201FF  <span></span> #FFFFFF
                                                </Text>:
                                                <Text className={'nerdy_colorGuid'}>
                                                    <span></span> #000000  <br/><span></span> #9201FF  <br/><span></span> #FFFFFF
                                                </Text>
                                            }
                                        </Col>
                                        <Col span={24}>
                                            <Title level={5} ><PushpinOutlined /> UI/UX Design</Title>
                                            <Text>
                                                중요 텍스트에 메인 컬러를 포인트로 주어 눈에 잘띄게함.<br/>
                                                모든 사용자 정보를 쉽게 인지하고 사용할수있도록 크고 넓은 레이아웃을 가짐.<br/>
                                                규칙적인 그리드로 더 심플하고 깔끔하게 디자인함.<br/>
                                                PC 페이지 스크롤시 페이지 상단으로 갈수있는 버튼 고정.
                                            </Text>
                                        </Col>
                                        <Col span={24}>
                                            <Title level={5} ><PushpinOutlined /> Publishing</Title>
                                            <Text>
                                                스크린 사이즈에 따라 레이아웃이 변하는 반응형 웹 구현.<br/>
                                                반응형 모바일은 스크롤 이벤트를 제거.<br/>
                                                사용자의 접근성을 높이기 위해 텍스트를 이미지 대신 마크업 하여 웹 표준성을 준수.
                                                동적인 요소를 위해 jQuery 플러그인, JavaScript를 사용.<br/>
                                                말줄임 jQuery dotdotdot 플러그인 swiper 사용.
                                            </Text>
                                        </Col>
                                    </Row>
                                </Panel>
                            </Collapse>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
};

export default NerdyInfo;
