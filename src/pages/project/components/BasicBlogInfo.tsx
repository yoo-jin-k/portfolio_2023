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
                                        개인프로젝트<br/><br/>
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
                            <Title level={3}>프로젝트 소개</Title>
                            <Text>개인 블로그<br/>
                                코스타 과정 진행중에 개인 프로젝트 과제입니다.<br/>
                                심플하게 개인 블로그를 만들어서<br/>
                                사용할수있는 블로그 입니다.
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
                                <Panel header={<Title level={5} className={'panel_title'}>프로젝트 목적</Title>} key="1" style={panelStyle}>
                                    <Row>
                                        <Col span={24}>
                                            <Text>
                                                CRUD 를 더 심화있게 공부할수있었던 프로젝트 입니다.<br/>
                                                간단한 예제들로만 공부를 하다가 이번 개인프로젝트로<br/>
                                                더 상세하게 코드를 만들수있었습니다.<br/>
                                                bootstrap 으로 깔끔하게 작업했습니다.
                                            </Text>
                                        </Col>
                                    </Row>
                                </Panel>
                                <Panel header={<Title level={5} className={'panel_title'}>ERD</Title>} key="3" style={panelStyle}>
                                    <img src={erd} alt={'erd'} width={'100%'}/>
                                </Panel>
                                <Panel header={<Title level={5} className={'panel_title'}>주요기능 소개</Title>} key="4" style={panelStyle}>
                                    <Row>
                                        <Col span={24}>
                                            <Title level={5}><PushpinOutlined /> Main</Title>
                                            <img src={img1} alt={'img_1'} width={'100%'}/>
                                            <Text>- 메인화면에서 로그인 전후로 버튼이 로그인, 로그아웃으로 변환</Text>
                                        </Col>
                                        <Col span={24}>
                                            <Title level={5}><PushpinOutlined /> Login</Title>
                                            <img src={img2} alt={'img_2'} width={'100%'}/>
                                            <Text>- 틀린 비밀번호로 로그인시에 문구발생</Text>
                                        </Col>
                                        <Col span={24}>
                                            <Title level={5}><PushpinOutlined /> Join</Title>
                                            <img src={img3} alt={'img3'} width={'100%'}/>
                                            <Text>- 회원가입 화면</Text>
                                        </Col>
                                        <Divider className={'original'}/>
                                        <Col span={24}>
                                            <img src={img4} alt={'img4'} width={'100%'}/>
                                            <Text>- ajax 로 id 공백인지 체크</Text><br/>
                                        </Col>
                                        <Divider className={'original'}/>
                                        <Col span={24}>
                                            <img src={img5} alt={'img5'} width={'100%'}/>
                                            <Text>- ajax 로 id 가 저장되어있는 id 인지 체크</Text>
                                        </Col>
                                            <Col span={24}>
                                                <Title level={5}><PushpinOutlined /> Blog Main</Title>
                                                <img src={img6} alt={'img6'} width={'100%'}/>
                                                <Text>- 로그인후 내블로그 화면</Text>
                                            </Col>
                                        <Divider className={'original'}/>
                                            <Col span={24}>
                                                <img src={img7} alt={'img7'} width={'100%'}/>
                                                <Text>- HttpServletRequest로 블로그 주인이면 관리버튼 생성</Text>
                                            </Col>
                                        <Col span={24}>
                                            <Title level={5}><PushpinOutlined /> Blog Setting</Title>
                                            <img src={img10} alt={'img10'} width={'100%'}/>
                                            <Text>- 카테고리 추가, 삭제 기능</Text>
                                            <Divider className={'original'}/>
                                            <img src={img11} alt={'img4'} width={'100%'}/>
                                            <Text>- 카테고리 추가후에 blogmain 화면에서 카테고리 확인.</Text>
                                            <Text>- 오른쪽 추가된 카테고리 클릭시 클릭한 카테고리의 글이 리스트에 뜹니다.</Text>
                                            <Divider className={'original'}/>
                                            <img src={img8} alt={'img4'} width={'100%'}/>
                                            <Text>- 게시글 작성</Text>
                                            <Divider className={'original'}/>
                                            <img src={img9} alt={'img4'} width={'100%'}/>
                                            <Text>- 글리스트 클릭시에 게시한 글 내용이 상단에 뜹니다.</Text>
                                            <Divider className={'original'}/>
                                            <img src={img12} alt={'img4'} width={'100%'}/>
                                            <Text>- 블로그 타이틀 변경, 사진 업로드</Text>
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
