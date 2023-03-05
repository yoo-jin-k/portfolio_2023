import { Col, Row, Grid } from 'antd';
import { CaretRightOutlined } from '@ant-design/icons';
const { useBreakpoint } = Grid;
const Skills = () => {
    const screens = useBreakpoint();
    const { md: isMd } = screens;
    return (
        <Row className={'skill_info'} >
            <Col span={isMd?12:24}>
                {/*언어 개발 툴*/}
                <Row><CaretRightOutlined /> Jave/JSP</Row>
                <Row><CaretRightOutlined /> TypeScript</Row>
                <Row><CaretRightOutlined /> JavaScript</Row>
                <Row><CaretRightOutlined /> jQuery</Row>
                <Row><CaretRightOutlined /> React/ReactNative</Row>
                <Row><CaretRightOutlined /> HTML5/CSS3</Row>
                <Row><CaretRightOutlined /> SQL</Row>
            </Col>

            <Col span={isMd?12:24}>
                {/*개발 환경*/}
                <Row><CaretRightOutlined /> Window/Linux/Mac</Row>
                <Row><CaretRightOutlined /> Tomcat8.5</Row>
                <Row><CaretRightOutlined /> Spring4,5</Row>
                <Row><CaretRightOutlined /> SpringBoot</Row>
                <Row><CaretRightOutlined /> MyBatis</Row>
                <Row><CaretRightOutlined /> Thymeleaf</Row>
                <Row><CaretRightOutlined /> Lombook</Row>
                <Row><CaretRightOutlined /> Bootstrap/Antd/Material</Row>

            </Col>

            <Col span={isMd?12:24}>
                {/*사용가능도구*/}
                <Row><CaretRightOutlined /> Intellij/Eclipse</Row>
                <Row><CaretRightOutlined /> STS4/VScode</Row>
                <Row><CaretRightOutlined /> Gradle/Dbeaver</Row>
                <Row><CaretRightOutlined /> Git/Github</Row>
                <Row><CaretRightOutlined /> Slack/Notion</Row>
            </Col>

            <Col span={isMd?12:24}>
                {/*디자인*/}
                <Row><CaretRightOutlined /> Photoshop/Illustrator</Row>
                <Row><CaretRightOutlined /> XD/Figma</Row>
            </Col>
        </Row>
    );
};

export default Skills;
