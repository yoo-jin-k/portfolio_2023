import {Row, Col, Typography, Collapse, theme, Grid, Button, Divider,Tag} from 'antd';
import { CaretRightOutlined, ArrowRightOutlined, PushpinOutlined, LinkOutlined } from '@ant-design/icons';
import main from '../../../assets/beanShop/main_img.jpg';
import erd from '../../../assets/beanShop/library-erd.png';
import img1 from "../../../assets/basicBlog/img1.png";
const { Title, Text } = Typography;
const { Panel } = Collapse;
const { useBreakpoint } = Grid;

const BeanShopInfo = () => {
    const screens = useBreakpoint();
    const { md: isMd } = screens;
    const { token } = theme.useToken();
    const panelStyle = {
        marginBottom: 24,
        background: '#fff',
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
                                Bean Shop Project
                            </Title>
                            <Row justify={'space-between'} style={{alignItems:'end'}}>
                                <Col>
                                    <Text>
                                        개인프로젝트<br/><br/>
                                        <span style={{color:'#9b9b9b',marginBottom:10,display:'flex'}}>2023.03.01 ~ 2023.04.17</span>
                                        <Tag color="green">Spring</Tag> <Tag color="gold">JS</Tag> <Tag color="red">Maven</Tag>
                                        <Tag color="volcano">DBeaver</Tag> <Tag color="blue">Jsp</Tag> <Tag color="cyan">BootStrap</Tag>
                                    </Text>
                                </Col>
                                <Col>
                                    <Button size="middle" shape="round" href={'https://github.com/yoo-jin-k/BeanShop'} id={'main_btn'} style={{marginTop:isMd?0:15}} target='_blank'>Github</Button>
                                    {/*<Button size="middle" shape="round" href={'http://54.180.114.53:8080/v1/index.html'} id={'main_btn'} style={{marginTop:isMd?0:15}} target='_blank'>Show</Button>*/}
                                </Col>
                            </Row>
                        </Col>
                        <Divider/>
                        <Col span={24} style={{marginBottom: '20px'}}>
                            <img src={main} alt={'main img'} width={'100%'}/>
                        </Col>
                        {/**/}
                        <Col span={24}>

                            <Collapse
                                bordered={false}
                                defaultActiveKey={['0']}
                                expandIcon={({ isActive }) => <CaretRightOutlined rotate={isActive ? 90 : 0} />}
                                className={'project_collapse'}
                            >
                                <Panel header={<Title level={5} className={'panel_title'}>프로젝트 개발 동기 및 목표</Title>} key="0" style={panelStyle}>
                                    <Row>
                                        <Col span={24}>
                                            <Text>
                                                매일 하루에 한잔이상의 커피를 마시는데 문뜩 드는생각이<br/>
                                                이젠 나만의 원두 쇼핑몰을 만들면 좋겠다 생각이들었습니다.<br/>
                                                제가 제일좋아하는걸로 만들고싶었고 흔한 쇼핑몰 프로젝트 일지라도<br/>
                                                일단 해보는것이 제일 중요하다고 생각이 들었습니다.<br/>
                                                전체적인 흐름파악을 목표로 선정했습니다.
                                            </Text>
                                        </Col>
                                    </Row>
                                </Panel>
                                <Panel header={<Title level={5} className={'panel_title'}>프로젝트 개발 환경</Title>} key="1" style={panelStyle}>
                                    <Row>
                                        <Col span={24}>
                                            <Text>
                                            - 운영체제 : MacOs<br/>
                                            - 통합개발환경(IDE) : eclipse<br/>
                                            - JDK : 1.8<br/>
                                            - Tomcat : 8.5<br/>
                                            - 데이터 베이스 : DBeaver<br/>
                                            - 빌드 툴 : Maven<br/>
                                            - 관리 툴 : Git, GitHub
                                            </Text>
                                        </Col>
                                    </Row>
                                </Panel>
                                <Panel header={<Title level={5} className={'panel_title'}>프로젝트 기술 스택</Title>} key="2" style={panelStyle}>
                                    <Row>
                                        <Col span={24}>
                                            <Text>
                                                - 프론트엔드  <Tag color="red">HTML</Tag> <Tag color="blue">CSS</Tag> <Tag color="gold">JS</Tag> <Tag color="cyan">BootStrap</Tag><br/><br/>
                                                - 백엔드  <Tag color="green">Spring</Tag> <Tag color="cyan">Spring Data JPA</Tag><br/><br/>
                                                - 데이터베이스  <Tag color="volcano">DBeaver</Tag> <Tag color="red">Oracle</Tag>
                                            </Text>
                                        </Col>
                                    </Row>
                                </Panel>

                                <Panel header={<Title level={5} className={'panel_title'}>프로젝트 구현 기능</Title>} key="3" style={panelStyle}>
                                    <Row>
                                        <Col span={24}>
                                            <Text>
                                                <Title level={5}><PushpinOutlined /> 회원 (Member)</Title>
                                                회원가입 / 로그인 및 로그아웃

                                                <Title level={5}><PushpinOutlined /> 상품 (Goods)</Title>
                                                상품 조회 (메인화면) / 상품 상세 페이지 / 최근본 상품 리스트 / 공유하기

                                                <Title level={5}><PushpinOutlined /> 주문 (Order)</Title>
                                                상품주문 / 주문 내역 조회 / 주문 취소

                                                <Title level={5}><PushpinOutlined /> 장바구니 (Cart)</Title>
                                                장바구니 담기 / 장바구니 조회 / 장바구니 삭제 / 장바구니 상품 주문

                                                <Title level={5}><PushpinOutlined /> 관리자 (Admin)</Title>
                                                회원조회 및 관리 / 주문내역조회 / 상품 등록 / 상품 관리 / 상품 수정

                                            </Text>
                                        </Col>
                                    </Row>
                                </Panel>
                                <Panel header={<Title level={5} className={'panel_title'}>ERD</Title>} key="4" style={panelStyle}>
                                    <img src={erd} alt={'erd'} width={'100%'}/>
                                    <text>
                                    T_Shopping_Member - 쇼핑몰 회원 정보 테이블<br/>
                                    T_Shopping_Cart - 회원의 장바구니 테이블<br/>
                                    T_Shopping_Orders - 쇼핑몰 회원들의 주문정보 테이블<br/>
                                    T_Shopping_Goods - 쇼핑몰 상품정보 테이블<br/>
                                    T_Shopping_Image - 상품의이미지 정보를 담고 있는 테이블
                                    </text>
                                </Panel>
                                <Panel header={<Title level={5} className={'panel_title'}>프로젝트 후 느낀 점</Title>} key="5" style={panelStyle}>
                                    <Row>
                                        <Col span={24}>
                                            <Text>
                                                처음부터 체계적으로 계획을 짜서 차근차근 진행하는부분이<br/>
                                                부족해서 그런지 이거했다 저거했다 하는부분이 아쉬웠습니다.<br/>
                                                간단한 CRUD 만 할려고 하다가 점점 욕심이 나서 하다보니<br/>
                                                계획짜던건 뒤로제치고 내가 하고싶은부분을 계속 하게되었고<br/>
                                                나중엔정리가 안되는 기분이 들었습니다. <br/>
                                                일상에서 당연하게 사용하고 있던 주문, <br/>
                                                장바구니 등등의 기능을 실제로 구현할려하니 <br/>
                                                너무 복잡하고 이해하는게 어려움이 많았었습니다.<br/>
                                                하지만 결국엔 만들어내니 정말 뿌듯하고 미숙하지만 <br/>
                                                더 익숙해지기 위해 분발해야겠다는 의지가 불타오르는 프로젝트인거같습니다.<br/>
                                                아직 완정작은 아니고 완벽한건 없다고 생각듭니다. <br/>
                                                계속해서 수정하고 개선 할 계획입니다.
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

export default BeanShopInfo;
