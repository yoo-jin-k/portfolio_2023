import {Row, Col, Typography, Collapse, theme, Grid, Button, Divider,Tag} from 'antd';
import { CaretRightOutlined, ArrowRightOutlined, PushpinOutlined, LinkOutlined } from '@ant-design/icons';
// import petner_video from '/assets/videos/petner_video.mp4';
import main from '../../../assets/basicBlog/main_img.png';
import img1 from '../../../assets/basicBlog/img1.png';
import img2 from '../../../assets/basicBlog/img2.png';
import img3 from '../../../assets/basicBlog/img3.png';
import img4 from '../../../assets/basicBlog/img4.png';
import img5 from '../../../assets/basicBlog/img5.png';
import img6 from '../../../assets/basicBlog/img6.png';
import img7 from '../../../assets/basicBlog/img7.png';
import img8 from '../../../assets/basicBlog/img8.png';
import img9 from '../../../assets/basicBlog/img9.png';
import img10 from '../../../assets/basicBlog/img10.png';
import img11 from '../../../assets/basicBlog/img11.png';
import img12 from '../../../assets/basicBlog/img12.png';
import img13 from '../../../assets/basicBlog/img13.png';
// import img14 from '../../../assets/basicBlog/info_14.png';
import erd from '../../../assets/basicBlog/erd.png';
import petner_main from "../../../assets/petner_main.png";
const { Title, Text } = Typography;
const { Panel } = Collapse;
const { useBreakpoint } = Grid;


const BasicBlogInfo = () => {
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
                                Basic Blog Project
                            </Title>
                            <Row justify={'space-between'} style={{alignItems:'end'}}>
                                <Col>
                                    <Text>
                                        ??????????????????<br/><br/>
                                        <span style={{color:'#9b9b9b',marginBottom:10,display:'flex'}}>2022.09.02 ~ 2022.09.09</span>
                                        <Tag color="green">Spring</Tag> <Tag color="gold">Java</Tag> <Tag color="red">Mybatis</Tag>
                                        <Tag color="volcano">Oracle</Tag> <Tag color="blue">Ajax</Tag> <Tag color="cyan">jQuery</Tag>
                                    </Text>
                                </Col>
                                <Col>
                                    <Button size="middle" shape="round" href={'https://github.com/yoo-jin-k/basicBlog'} id={'main_btn'} style={{marginTop:isMd?0:15}} target='_blank'>Github</Button>
                                </Col>
                            </Row>
                        </Col>
                        <Divider/>
                        <Col span={24}>
                            <img src={main} alt={'main img'} width={'100%'}/>
                        </Col>
                        <Col span={24} style={{marginBottom:20}}>
                            <Title level={3}>???????????? ??????</Title>
                            <Text>?????? ?????????<br/>
                                ????????? ?????? ???????????? ?????? ???????????? ???????????????.<br/>
                                ???????????? ?????? ???????????? ????????????<br/>
                                ?????????????????? ????????? ?????????.
                            </Text>
                        </Col>
                        {/**/}
                        <Col span={24}>

                            <Collapse
                                bordered={false}
                                defaultActiveKey={['0']}
                                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                                className={'project_collapse'}
                            >
                                <Panel header={<Title level={5} className={'panel_title'}>???????????? ??????</Title>} key="1" style={panelStyle}>
                                    <Row>
                                        <Col span={24}>
                                            <Text>
                                                CRUD ??? ??? ???????????? ????????????????????? ???????????? ?????????.<br/>
                                                ????????? ??????????????? ????????? ????????? ?????? ?????????????????????<br/>
                                                ??? ???????????? ????????? ????????????????????????.<br/>
                                                bootstrap ?????? ???????????? ??????????????????.
                                            </Text>
                                        </Col>
                                    </Row>
                                </Panel>
                                <Panel header={<Title level={5} className={'panel_title'}>ERD</Title>} key="3" style={panelStyle}>
                                    <img src={erd} alt={'erd'} width={'100%'}/>
                                </Panel>
                                <Panel header={<Title level={5} className={'panel_title'}>???????????? ??????</Title>} key="4" style={panelStyle}>
                                    <Row>
                                        <Col span={24}>
                                            <Title level={5}><PushpinOutlined /> Main</Title>
                                            <img src={img1} alt={'img_1'} width={'100%'}/>
                                            <Text>- ?????????????????? ????????? ????????? ????????? ?????????, ?????????????????? ??????</Text>
                                        </Col>
                                        <Col span={24}>
                                            <Title level={5}><PushpinOutlined /> Login</Title>
                                            <img src={img2} alt={'img_2'} width={'100%'}/>
                                            <Text>- ?????? ??????????????? ??????????????? ????????????</Text>
                                        </Col>
                                        <Col span={24}>
                                            <Title level={5}><PushpinOutlined /> Join</Title>
                                            <img src={img3} alt={'img3'} width={'100%'}/>
                                            <Text>- ???????????? ??????</Text>
                                        </Col>
                                        <Divider className={'original'}/>
                                        <Col span={24}>
                                            <img src={img4} alt={'img4'} width={'100%'}/>
                                            <Text>- ajax ??? id ???????????? ??????</Text><br/>
                                        </Col>
                                        <Divider className={'original'}/>
                                        <Col span={24}>
                                            <img src={img5} alt={'img5'} width={'100%'}/>
                                            <Text>- ajax ??? id ??? ?????????????????? id ?????? ??????</Text>
                                        </Col>
                                            <Col span={24}>
                                                <Title level={5}><PushpinOutlined /> Blog Main</Title>
                                                <img src={img6} alt={'img6'} width={'100%'}/>
                                                <Text>- ???????????? ???????????? ??????</Text>
                                            </Col>
                                        <Divider className={'original'}/>
                                            <Col span={24}>
                                                <img src={img7} alt={'img7'} width={'100%'}/>
                                                <Text>- HttpServletRequest??? ????????? ???????????? ???????????? ??????</Text>
                                            </Col>
                                        <Col span={24}>
                                            <Title level={5}><PushpinOutlined /> Blog Setting</Title>
                                            <img src={img10} alt={'img10'} width={'100%'}/>
                                            <Text>- ???????????? ??????, ?????? ??????</Text>
                                            <Divider className={'original'}/>
                                            <img src={img11} alt={'img4'} width={'100%'}/>
                                            <Text>- ???????????? ???????????? blogmain ???????????? ???????????? ??????.</Text>
                                            <Text>- ????????? ????????? ???????????? ????????? ????????? ??????????????? ?????? ???????????? ?????????.</Text>
                                            <Divider className={'original'}/>
                                            <img src={img8} alt={'img4'} width={'100%'}/>
                                            <Text>- ????????? ??????</Text>
                                            <Divider className={'original'}/>
                                            <img src={img9} alt={'img4'} width={'100%'}/>
                                            <Text>- ???????????? ???????????? ????????? ??? ????????? ????????? ?????????.</Text>
                                            <Divider className={'original'}/>
                                            <img src={img12} alt={'img4'} width={'100%'}/>
                                            <Text>- ????????? ????????? ??????, ?????? ?????????</Text>
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

export default BasicBlogInfo;
