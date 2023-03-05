import React from 'react';
import { Divider, Steps, Row } from 'antd';
const Career = () => {
    return (
        <Row>
            경력
            <Steps
                progressDot
                current={0}
                direction="vertical"
                items={[
                    {
                        title: '뉴테크프라임',
                        subTitle: '2021.04 ~ 2022.05',
                        description: '개발팀 - 퍼블리셔',
                    },
                ]}
            />
        </Row>
    );
};

export default Career;
