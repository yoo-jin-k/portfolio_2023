import React, { useRef, useState } from 'react';
import {Input, Button, Row, Col, Layout, Typography, Grid} from "antd";
import emailjs from '@emailjs/browser';
// import emailjs from 'emailjs-com';

const { TextArea } = Input;
const {Header, Content, Footer} = Layout;
const { Title,Text } = Typography;
const { useBreakpoint } = Grid;
export default function Email() {
    const screens = useBreakpoint();
    const { md: isMd } = screens;
    const [value, setValue] = useState('');
    const form = useRef();

    function sendEmail(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();

        emailjs.sendForm('service_rcsaq0t', 'template_p3a8cke', e.currentTarget, '4pdFoypHJTMe5aiEc')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    }

    return (
        <>

                <form onSubmit={sendEmail}>
                    <Row gutter={[0,16]}>
                    <Col span={24}>
                        <Row gutter={[isMd?16:0,isMd?0:16]}>
                            <Col span={isMd?12:24}>
                                <Input size="large" type="text" name="name" placeholder="Name" />
                            </Col>
                            <Col span={isMd?12:24}>
                                <Input size="large" type="email" name="email" placeholder="Email" />
                            </Col>
                        </Row>
                    </Col>
                    <Col span={24}>
                        <TextArea
                            name="message"
                            value={value}
                            size={'large'}
                            onChange={(e) => setValue(e.target.value)}
                            placeholder="Message"
                            autoSize={{ minRows: 3.5, maxRows: 5 }}
                        />
                    </Col>
                    <Button size="large" htmlType={"submit"} value={'Send'} type="primary" shape="round" id={'main_btn'}>Send Message</Button>
                    </Row>
                    </form>

        </>
    );
};
