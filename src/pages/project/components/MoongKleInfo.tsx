import {Row, Col, Typography, Collapse, theme, Grid, Button, Divider,Tag} from 'antd';
import { CaretRightOutlined, PushpinOutlined, LinkOutlined } from '@ant-design/icons';
import moongkle_main from '../../../assets/moongkle/moongkle_mac_img.png';
import img1 from '../../../assets/moongkle/img1.png';
import img2 from '../../../assets/moongkle/img2.png';
import img3 from '../../../assets/moongkle/img3.png';
import img4 from '../../../assets/moongkle/img4.png';
const { Title, Text } = Typography;
const { Panel } = Collapse;
const { useBreakpoint } = Grid;

const MoongKleInfo = () => {
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
                                MoongKle Renewal Project
                            </Title>
                            <Row justify={'space-between'} style={{alignItems:'end'}}>
                                <Col>
                                    <Text>
                                        몽클 쇼핑몰 리뉴얼 프로젝트<br/><br/>
                                        <span style={{color:'#9b9b9b',marginBottom:10,display:'flex'}}>5day</span>
                                        <Tag color="green">Html5</Tag> <Tag color="gold">JavaScript</Tag>
                                        <Tag color="volcano">Sass</Tag> <Tag color="blue">Bootstrap</Tag> <Tag color="cyan">jQuery</Tag>
                                    </Text>
                                </Col>
                                <Col>
                                    <Button size="middle" shape="round" href={'https://github.com/yoo-jin-k/moongkle.github.io'} id={'main_btn'} style={{marginTop:isMd?0:15,marginRight:10}} target='_blank'>Github</Button>
                                    <Button size="middle" shape="round" href={'https://yoo-jin-k.github.io/moongkle.github.io/'} id={'main_btn'} style={{marginTop:isMd?0:15}} target='_blank'>View</Button>
                                </Col>
                            </Row>
                        </Col>
                        <Divider/>
                        <Col span={24} style={{marginBottom:20}}>
                            <img src={moongkle_main} alt={'moongkle_main'} width={'100%'}/>
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
                                            <Text>몽클이라는 쇼핑몰을 저만의 디자인으로<br/>
                                                리뉴얼해 반응형응로 작업한 사이트 입니다.<br/>
                                                깔끔함에 중점을 두었고 반응형으로 작업을 했습니다.
                                            </Text>
                                        </Col>
                                    </Row>
                                </Panel>
                                <Panel header={<Title level={5} className={'panel_title'}>상세작업</Title>} key="2" style={panelStyle}>
                                    <Row>
                                        <Col span={24}>
                                            {isMd?
                                            <Row>
                                                <Col span={12}>
                                                    <Title level={5}><PushpinOutlined /> Project Goal</Title>
                                                    <Text>
                                                        'moongkle' 사이트의 심플한 이미지를 살려<br/>
                                                        더 깔끔하게 레이아웃으로 재구성<br/>
                                                        디자인된 레이아웃을 탄탄하고<br/>
                                                        조직적인 HTML로 구현
                                                    </Text>
                                                </Col>
                                                <Col span={12}>
                                                    <img src={img1} alt={'img1'} width={isMd?'250px':'100%'}/>
                                                </Col>
                                            </Row> :
                                                <Row>
                                                    <Col span={24}>
                                                        <Title level={5}><PushpinOutlined /> Project Goal</Title>
                                                        <img src={img1} alt={'img1'} width={isMd?'250px':'100%'}/><br/>
                                                        <Text>
                                                            'moongkle' 사이트의 심플한 이미지를 살려<br/>
                                                            더 깔끔하게 레이아웃으로 재구성<br/>
                                                            디자인된 레이아웃을 탄탄하고<br/>
                                                            조직적인 HTML로 구현
                                                        </Text>
                                                    </Col>
                                                </Row>
                                            }

                                        </Col>
                                        <Divider className={'original'}/>
                                        <Col span={24}>
                                            {isMd?
                                                <Row>
                                                    <Col span={12}>
                                                        <Title level={5}><PushpinOutlined /> 상세페이지 디자인 수정</Title>
                                                        <Text>상세페이지 디자인을 수정, 보완 했습니다.</Text>
                                                    </Col>
                                                    <Col span={12}>
                                                        <img src={img2} alt={'info_2'} width={'100%'}/>
                                                    </Col>
                                                </Row>
                                            :
                                                <>
                                            <Title level={5}><PushpinOutlined /> 상세페이지 디자인 수정</Title>
                                            <img src={img2} alt={'info_2'} width={'100%'}/>
                                            <Text>상세페이지 디자인을 수정, 보완 했습니다.</Text>
                                                </>
                                            }
                                        </Col>
                                        <Divider className={'original'}/>
                                        <Col span={24}>
                                            <Title level={5}><PushpinOutlined /> 보기편한 메뉴얼</Title>
                                            <img src={img3} alt={'info_3'} width={isMd? '300px' : '100%'}/><br/>
                                            <Text>복잡한 메뉴들을 상단에 정리해서 수정보완 하였습니다</Text>
                                        </Col>
                                        <Divider className={'original'}/>
                                        <Col span={24}>
                                            <Title level={5}><PushpinOutlined /> 타이틀 배너</Title>
                                            <img src={img4} alt={'info_4'} width={'100%'}/>
                                            <Text>타이틀 배너 반응형을 위해 모바일,PC 사이즈를 따로 제작</Text>
                                        </Col>
                                    </Row>
                                </Panel>

                                <Panel header={<Title level={5} className={'panel_title'}>Style Guide</Title>} key="3" style={panelStyle}>
                                    <Row>
                                        <Col span={24}>
                                            <Title level={5} ><PushpinOutlined /> Keyword</Title>
                                            <Text>
                                                #깔끔한 #규칙적인
                                            </Text>
                                        </Col>
                                        <Col span={24}>
                                            <Title level={5} ><PushpinOutlined /> Color</Title>
                                            <Text className={'moongkle_colorGuid'}>
                                                <span></span> #333333  <span></span> #BABABA  <span></span> #FFFFFF
                                            </Text>
                                        </Col>
                                        <Col span={24}>
                                            <Title level={5} ><PushpinOutlined /> Font</Title>
                                            <Text>
                                                apple-system, BlinkMacSystemFont
                                            </Text>
                                        </Col>
                                        <Col span={24}>
                                            <Title level={5} ><PushpinOutlined /> UX/UI Design</Title>
                                            <Text>
                                                복잡한 메뉴들을 상단에 깔끔하게 정리하여 볼수있게끔 리뉴얼함.<br/>
                                                모든 사용자 정보를 쉽게 인지하고 사용할 수 있도록, 크고 넓은 레이아웃을 가짐.<br/>
                                                규칙적인 그리드로 더 심플하고 깔끔하게 디자인함.
                                            </Text>
                                        </Col>
                                        <Col span={24}>
                                            <Title level={5} ><PushpinOutlined /> Publishing</Title>
                                            <Text>
                                                스크린 사이즈에 따라 레이아웃이 변하는 반응형 웹 구현.<br/>
                                                css 전처리기 scss를 이용하여 수정보완하기 편하게 사용.<br/>
                                                동적인 요소를 위해 jQuery 플러그인, JavaScript를 사용.<br/>
                                                메인에 Swiper 사용.
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

export default MoongKleInfo;
