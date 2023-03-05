import React from 'react';
import { Divider, Steps, Row } from 'antd';
const Education = () => {
  return (
      <Row>
          학력
          <Steps
              progressDot
              current={3}
              direction="vertical"
              items={[
                  {
                      title: '출생',
                      subTitle: 'sub',
                      description: '1994년 8월 11일',
                  },
                  {
                      title: '국제대학교',
                      subTitle: '2017년 졸업',
                      description: 'IT계열(컴퓨터정보전공)',
                  },
                  {
                      title: '더조은컴퓨터',
                      subTitle: '2020.04 ~ 2020.10',
                      description: '반응형UI/UX웹퍼블리셔',
                  },
                  {
                      title: '한국소프트웨어기술진흥협회',
                      subTitle: '2022.08 ~ 2022.12',
                      description: 'Java/ Spring 기반 웹 개발자 양성과정',
                  },
              ]}
          />
      </Row>
  );
};

export default Education;
