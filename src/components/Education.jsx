import React from 'react'
import {  Descriptions, Space, Typography } from "antd"
import { useSpring, animated } from 'react-spring';

const { Title } = Typography;

const Education = () => {
  const propsTitleAnimation = useSpring({
    from: { opacity: 0},
    to: { opacity: 1 },
    delay: 2222
  })
  const propsInfoAnimation = useSpring({
    from: { opacity: 0},
    to: { opacity: 1 },
    delay: 2666
  })
  return (
    <div style={{ marginTop: "1rem"}}>
      <animated.h1 style={propsTitleAnimation}>
        <Title>Education</Title>
      </animated.h1>
      <animated.div style={propsInfoAnimation}>
        <Space direction='vertical'>
          <Descriptions>
            <Descriptions.Item label="University">
              <Title level={5}>Ecole Nationale d'Informatique</Title>
            </Descriptions.Item>
          </Descriptions>
          <Descriptions>
          <Descriptions.Item label="Options">
              <Title level={5}>Software Engineering</Title>
            </Descriptions.Item>
          </Descriptions>
          <Descriptions>
            <Descriptions.Item label="Class">
              <Title level={5}>L3</Title>
            </Descriptions.Item>
          </Descriptions>
          <Descriptions>
            <Descriptions.Item label="Years">
              <Title level={5}>2022</Title>
            </Descriptions.Item>
          </Descriptions>
        </Space>
      </animated.div>
    </div>
  )
}

export default Education