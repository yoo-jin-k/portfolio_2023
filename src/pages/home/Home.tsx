import React, {useEffect} from 'react';
import {Col, Grid, Row, Layout, Typography, Button} from 'antd';

// import {t} from '@lingui/macro';


const {Header, Content, Footer} = Layout;
const { Title } = Typography;
const Home = () => {
    return (
        <>
            <Content className={'site-layout'}>
                <div className={'container menu_home'}>
                <Row justify={'center'} style={{flexDirection:'column',alignItems:'center'}}>
                    <Col>
                        <Title className={'home_title logo'}><span className={'point_color'}>94</span>0811</Title>
                    </Col>
                    <Col>
                        <h3 className={'home_sub'}>
                            A person who
                            continues to develop
                        </h3>
                    </Col>
                    <Col>
                        <Button type="primary" shape="round" size="large" id={'main_btn'} style={{marginTop:20,padding:'0 25px'}}>
                            Get in Touch
                        </Button>
                    </Col>
                </Row>
                </div>
            </Content>
        </>
    );
};
export default Home;
