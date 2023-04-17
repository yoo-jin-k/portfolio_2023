import {Row, Col, Typography, Collapse, theme, Grid, Button, Divider,Tag} from 'antd';
import { CaretRightOutlined, ArrowRightOutlined, PushpinOutlined, LinkOutlined } from '@ant-design/icons';
import main from '../../../assets/libraryApp/main_img.png';
import erd from '../../../assets/libraryApp/library-erd.png';
const { Title, Text } = Typography;
const { Panel } = Collapse;
const { useBreakpoint } = Grid;

const LibraryInfo = () => {
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
                                Library App Project
                            </Title>
                            <Row justify={'space-between'} style={{alignItems:'end'}}>
                                <Col>
                                    <Text>
                                        개인프로젝트<br/><br/>
                                        <span style={{color:'#9b9b9b',marginBottom:10,display:'flex'}}>2023.03.30 ~ 2023.04.03</span>
                                        <Tag color="green">SpringBoot</Tag> <Tag color="gold">Java</Tag> <Tag color="red">gradle</Tag>
                                        <Tag color="volcano">MySQL</Tag> <Tag color="blue">aws</Tag> <Tag color="cyan">Linux</Tag>
                                    </Text>
                                </Col>
                                <Col>
                                    <Button size="middle" shape="round" href={'https://github.com/yoo-jin-k/library-app'} id={'main_btn'} style={{marginTop:isMd?0:15,marginRight:10}} target='_blank'>Github</Button>
                                    <Button size="middle" shape="round" href={'http://54.180.114.53:8080/v1/index.html'} id={'main_btn'} style={{marginTop:isMd?0:15}} target='_blank'>Show</Button>
                                </Col>
                            </Row>
                        </Col>
                        <Divider/>
                        <Col span={24}>
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
                                <Panel header={<Title level={5} className={'panel_title'}>프로젝트 소개</Title>} key="0" style={panelStyle}>
                                    <Row>
                                        <Col span={24}>
                                            <Text>
                                                심플하게 만든 도서 관리 애플리케이션입니다.<br/>
                                                간단한 CRUD기능과 aws로 배포연습을<br/>
                                                하기 위한 프로젝트 입니다.
                                            </Text>
                                        </Col>
                                    </Row>
                                </Panel>
                                <Panel header={<Title level={5} className={'panel_title'}>ERD</Title>} key="1" style={panelStyle}>
                                    <img src={erd} alt={'erd'} width={'100%'}/>
                                </Panel>
                            </Collapse>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </>
    );
};

export default LibraryInfo;
