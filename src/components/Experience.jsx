import React from 'react'
import { Typography,Row,Col, Steps, Space, Tag, Divider } from "antd"
import { useSpring, animated } from 'react-spring';

const { Title,Text } = Typography;
const { Step } = Steps;

const Experience = () => {
  const propsTitleAnimation = useSpring({
    from: { opacity: 0},
    to: { opacity: 1 },
    delay: 2999
  })
  const propsInfoAnimation = useSpring({
    from: { opacity: 0},
    to: { opacity: 1 },
    delay: 3000
  })
  return (
    <div style={{ marginTop: "1rem"}}>
      <animated.h1 style={propsTitleAnimation}>
        <Title>Experience</Title>
      </animated.h1>
      <animated.div style={propsInfoAnimation}>
        <Row>
          <Col lg={6} md={6} sm={10} xs={10}>
            <Steps direction='vertical' current={3} style={{ width:"100%", height:"100%"}}>
              <Step title="Book Management"></Step>
              <Step title="School Management"></Step>
              <Step title="Resume-o"></Step>
              <Step title="Freelancer"></Step>
            </Steps>
          </Col>
          <Col lg={10} md={10} sm={14} xs={14}>
            <Space direction='vertical'>
              <Text>Web application for book management</Text>
              <Space>
                <Tag color={"blue"}>Mongo</Tag>
                <Tag color={"cyan"}>Express</Tag>
                <Tag color={"gold"}>React</Tag>
                <Tag color={"green"}>Node</Tag>
                <Tag color={"yellow"}>Ant Design</Tag>
              </Space>
              <Divider/>
            </Space>
            <Space direction='vertical'>
              <Text>Web application for school management</Text>
              <Space>
                <Tag color={"blue"}>Mongo</Tag>
                <Tag color={"cyan"}>Express</Tag>
                <Tag color={"gold"}>React</Tag>
                <Tag color={"green"}>Node</Tag>
                <Tag color={"yellow"}>Ant Design</Tag>
              </Space>
              <Divider/>
            </Space>
            <Space direction='vertical'>
              <Text>Web application for creating a resume</Text>
              <Space>
                <Tag color={"blue"}>Mongo</Tag>
                <Tag color={"cyan"}>Express</Tag>
                <Tag color={"gold"}>React</Tag>
                <Tag color={"green"}>Node</Tag>
                <Tag color={"yellow"}>Ant Design</Tag>
              </Space>
              <Divider/>
            </Space>
            <Space direction='vertical'>
              <Text>Web application to find or hire a freelancer</Text>
              <Space>
                <Tag color={"blue"}>Mongo</Tag>
                <Tag color={"cyan"}>Express</Tag>
                <Tag color={"gold"}>React</Tag>
                <Tag color={"green"}>Node</Tag>
                <Tag color={"yellow"}>Ant Design</Tag>
              </Space>
              <Divider/>
            </Space>
          </Col>
        </Row>
      </animated.div>
    </div>
  )
}

export default Experience