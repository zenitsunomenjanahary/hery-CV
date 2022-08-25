import React from 'react'
import { Col, Row,Typography,Image,Space,Layout } from 'antd'
import imgHery from "../images/hery.JPG";
import { useSpring, animated } from 'react-spring';

const { Title } = Typography;

const Header = () => {
    const propsImgAnimation = useSpring({
        from: { opacity: 0},
        to: { opacity: 1},
        delay: 333
    });
    const propsNameAnimation = useSpring({
        from: { opacity: 0},
        to: { opacity: 1},
        delay: 777
    });
    const propsPostAnimation = useSpring({
        from: { opacity: 0},
        to: { opacity: 1},
        delay: 1111
    });

  return (
    <Layout style={{ padding:"1rem 6rem 1rem 6rem", background:"#000"}}>
        <Row>
            <Col lg={8} md={8} sm={24} xs={12}>
                <animated.image style={propsImgAnimation}>
                    <Image src={imgHery} style={{ borderRadius:"20px"}} width={150}/>
                </animated.image>
            </Col>
            <Col lg={16} md={16} sm={24} xs={24} style={{display:"flex", alignItems:'center'}}>
                <Space direction='vertical'>
                    <animated.h1 style={propsNameAnimation}>
                        <Title  style={{ color:"white"}}>Rakotomahery <br/> Nomenjanahary Eric </Title>    
                    </animated.h1>
                    <animated.h2 style={propsPostAnimation}>
                        <Title level={4} style={{ color:"gray"}}> Developper JavaScript</Title>
                    </animated.h2>
                </Space>
            </Col>
        </Row>
    </Layout>
  )
}

export default Header