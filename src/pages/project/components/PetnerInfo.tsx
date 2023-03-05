import {Row, Col, Typography, Collapse, theme, Grid, Button, Divider,Tag} from 'antd';
import { CaretRightOutlined, ArrowRightOutlined, PushpinOutlined, LinkOutlined } from '@ant-design/icons';
// import petner_video from '/assets/videos/petner_video.mp4';
import petner_main from '../../../assets/petner_main.png';
import img1 from '../../../assets/petner/info_1.png';
import img2 from '../../../assets/petner/info_2.svg';
import img3 from '../../../assets/petner/info_3.png';
import img4 from '../../../assets/petner/info_4.png';
import img5 from '../../../assets/petner/info_5.png';
import img6 from '../../../assets/petner/info_6.png';
import img7 from '../../../assets/petner/info_7.png';
import img8 from '../../../assets/petner/info_8.png';
import img9 from '../../../assets/petner/info_9.png';
import img10 from '../../../assets/petner/info_10.png';
import img11 from '../../../assets/petner/info_11.png';
import img12 from '../../../assets/petner/info_12.png';
import img13 from '../../../assets/petner/info_13.png';
import img14 from '../../../assets/petner/info_14.png';
import erd from '../../../assets/petner/petner_erd.png';
const { Title, Text } = Typography;
const { Panel } = Collapse;
const { useBreakpoint } = Grid;

// const text = `
//   A dog is a type of domesticated animal.
//   Known for its loyalty and faithfulness,
//   it can be found as a welcome guest in many households across the world.
// `;



const PetnerInfo = () => {
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
                                Petner Team Project
                            </Title>
                            <Row justify={'space-between'} style={{alignItems:'end'}}>
                                <Col>
                                    <Text>
                                        펫트너 팀프로젝트<br/><br/>
                                        <span style={{color:'#9b9b9b',marginBottom:10,display:'flex'}}>2022.10.20 ~ 2022.12.22</span>
                                        <Tag color="green">Spring</Tag> <Tag color="gold">Java</Tag> <Tag color="red">Mybatis</Tag>
                                        <Tag color="volcano">Oracle</Tag> <Tag color="blue">Ajax</Tag> <Tag color="cyan">jQuery</Tag>
                                    </Text>
                                </Col>
                                <Col>
                                    <Button size="middle" shape="round" href={'https://github.com/kostapetner/petner'} id={'main_btn'} style={{marginTop:isMd?0:15}}>Github <LinkOutlined style={{color:'#fff'}}/></Button>
                                </Col>
                            </Row>
                        </Col>
                        <Divider/>
                        <Col span={24}>
                            <img src={petner_main} alt={'petner_main img'} width={'100%'}/>
                        </Col>
                        <Col span={24} style={{marginBottom:20}}>
                            <Title level={3}>프로젝트 소개</Title>
                            <Text>펫트너란?<br/>
                                반려동물을 뜻하는 ‘Pet’과<br/>
                                동료, 동행자를 뜻하는 ‘Partner’의 합성어로<br/>
                                ‘보호자, 펫시터 모두가 서로 협력하여<br/>
                                반려동물을 돌보자’ 는 의미입니다.
                            </Text>
                        </Col>
                        {/**/}
                        <Col span={24}>

                            <Collapse
                                bordered={false}
                                defaultActiveKey={['1']}
                                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                                className={'project_collapse'}
                            >
                                <Panel header={<Title level={5} className={'panel_title'}>프로젝트 목적</Title>} key="1" style={panelStyle}>
                                    <Row>
                                        <Col span={24}>
                                            <img src={img1} alt={'img1'} width={'100%'}/>
                                        </Col>
                                        <Col span={24}>
                                            <Text>
                                                반려동물 가구 증가 <ArrowRightOutlined /> 펫시터 수요 증가<br/><br/>
                                                저희 사이트는 펫시팅 전문업체보다는 가벼운 Casual 한 서비스로<br/>
                                                사용자 위치를 기반 그리고 주변의 펫시터 혹은<br/>
                                                반려동물 서비스현황을 제공하여<br/>
                                                주변의 이웃이나 반려동물 보호자도 직접 <br/>
                                                펫시팅에 참여 할수 있도록 돕는 서비스 입니다.
                                            </Text>
                                        </Col>
                                    </Row>
                                </Panel>
                                <Panel header={<Title level={5} className={'panel_title'}>서비스 대상</Title>} key="2" style={panelStyle}>
                                    <Row>
                                        <Col span={isMd?8:24}>
                                            <Title level={5} ><PushpinOutlined /> 관리자</Title>
                                            <Text>
                                            위치서비스 제공<br/>
                                            1:1 문의 응대
                                            </Text>
                                        </Col>
                                        <Col span={isMd?8:24}>
                                            <Title level={5} ><PushpinOutlined /> 보호자</Title>
                                            <Text>
                                            서비스 신청<br/>
                                            시터 찾기<br/>
                                            리뷰 작성
                                            </Text>
                                        </Col>
                                        <Col span={isMd?8:24}>
                                            <Title level={5} ><PushpinOutlined /> 펫세터</Title>
                                            <Text>
                                            반려동물 찾기(구직)<br/>
                                            리뷰 작성
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
                                            <Title level={5}><PushpinOutlined /> 비밀번호 암호화(Spring security)</Title>
                                            <img src={img2} alt={'info_2'} style={{maxWidth:300}}/><br/>
                                            <Text>- 사용자가 실제로 입력한 비밀번호</Text>
                                            <img src={img3} alt={'info_3'} width={'100%'}/>
                                            <Text>- DB에 저장되는 비밀번호</Text>
                                        </Col>
                                        <Col span={24}>
                                            <Title level={5}><PushpinOutlined /> 주소검색(다음 우편번호 API)</Title>
                                            <img src={img4} alt={'info_4'} width={'100%'}/>
                                            <Text>- 주소찾기 클릭 시 다음 우편번호 API 출력</Text>
                                        </Col>
                                        <Col span={24}>
                                            <Title level={5}><PushpinOutlined /> 소셜 로그인(카카오)</Title>
                                            <img src={img5} alt={'info_5'} width={'100%'}/>
                                            <Text>- 카카오ID로 간편 로그인 제공</Text>
                                        </Col>
                                        <Row gutter={[32,0]}>
                                            <Col span={isMd?12:24}>
                                                <Title level={5}><PushpinOutlined /> 로그인 유지(쿠키와 세션)</Title>
                                                <img src={img6} alt={'info_6'} width={'100%'}/>
                                                <Text>- 체크 시 쿠키도 생성(일주일)<br/>- 로그인 시 세션만 생성</Text>
                                            </Col>
                                            <Col span={isMd?12:24}>
                                                <Title level={5}><PushpinOutlined /> 세션 처리</Title>
                                                <img src={img7} alt={'info_7'} width={'100%'}/>
                                                <Text>- Admin page url 접속 불가<br/>
                                                    - user_auth 9, 10 만 접속가능</Text>
                                            </Col>
                                        </Row>
                                        <Col span={24}>
                                            <Title level={5}><PushpinOutlined /> 비밀번호 찾기(Gmail SMTP)</Title>
                                            <Text>
                                                - ID와 Email 대조 후 임시 비밀번호 전송<br/>
                                                - 임시비밀번호 역시 암호화 처리
                                            </Text>
                                        </Col>
                                        <Col span={24}>
                                            <Title level={5}><PushpinOutlined /> 1:1문의(카카오톡 오픈채널)</Title>
                                            <Text>- 1:1문의 시 카카오톡 오픈채널 연결</Text>
                                        </Col>
                                        <Col span={24}>
                                            <Title level={5}><PushpinOutlined /> 1:1 채팅(Websocket 양방향통신)</Title>
                                            <img src={img8} alt={'info_8'} width={'100%'}/>
                                            <Text>
                                                - 채팅 아이콘 클릭 시
                                                해당 유저와 1:1채팅 연결
                                            </Text>
                                            <img src={img9} alt={'info_9'} width={'100%'}/>
                                            <Text>
                                                - 채팅 아이콘 클릭 시 : Chatroom insert<br/>
                                                - 메시지 보낼시 : Chatmessage insert
                                            </Text>
                                        </Col>
                                        <Col span={24}>
                                            <Title level={5}><PushpinOutlined /> 파일업로드(Apache Commons FileUpload)</Title>
                                            <img src={img10} alt={'info_10'} width={'100%'}/>
                                            <Text>
                                                - Apache Commons FileUpload & 파일 미리보기<br/>
                                                - 10자리의 랜덤 문자열로 서버파일명을 만듬
                                            </Text>
                                        </Col>
                                        <Col span={24}>
                                            <Title level={5}><PushpinOutlined /> 돌봐줄 동물 찾기(Ajax)</Title>
                                            <img src={img11} alt={'info_11'} width={'100%'}/>
                                            <Text>
                                                - CheckBox로 검색<br/>
                                                - Ajax Get방식(비동기식)<br/>
                                                - Form태그로 페이지를 넘겨서 결과값이 나오는것이 아니라<br/>
                                                - 체크값에 따라 화면 reload없이 표출값이 즉각 달라지도록 구현<br/>
                                                - 실시간으로 출력
                                            </Text>
                                        </Col>
                                        <Col span={24}>
                                            <Title level={5}><PushpinOutlined /> 관리자페이지(이벤트) 댓글(Ajax)</Title>
                                            <img src={img12} alt={'info_12'} style={{maxWidth:300}}/><br/>
                                            <Text>
                                                - 이벤트 Table view<br/>
                                                - Ajax 이용해 실시간 댓글 업로드 가능<br/>
                                                - 댓글 작성자, 관리자만이 수정삭제 가능
                                            </Text>
                                        </Col>
                                        <Col span={24}>
                                            <Title level={5}><PushpinOutlined /> 내 주변찾기(Kakao Map API)</Title>
                                            <img src={img13} alt={'info_13'} style={{maxWidth:300}}/><br/>
                                            <Text>
                                                - 맨 처음 표출되는 주소는 회원가입 시 등록한 주소<br/>
                                                내 주변찾기 버튼을 눌렀을 때 사용자의 현재 위치의 우편번호를 받아 와 앞의 2자리는 특별시 및 광역시·도,<br/>
                                                세 번째 자리는 시·군·구를 나타내기 때문에 우편번호 앞3자리로 구까지 검색하도록 설정
                                            </Text>
                                        </Col>
                                        <Col span={24}>
                                            <Title level={5}><PushpinOutlined /> 세션 체크(AOP)</Title>
                                            <img src={img14} alt={'info_14'} style={{maxWidth:400}}/><br/>
                                            <Text>
                                                - AOP를 적용하여 지정한 컨트롤러에서 로그인할 때 생기는 유효한 세션 값이 없으면 로그인 페이지로 리다이렉트함
                                            </Text>
                                        </Col>
                                        <Col span={24}>
                                            <Title level={5}><PushpinOutlined /> 관리자 페이지(CRUD)</Title>
                                            <Text>
                                                - 회원상세정보 조회, 추가, 등록, 삭제 (CRUD)
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

export default PetnerInfo;
