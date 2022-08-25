import React from "react"
import { Row,Col } from "antd";
import Header from "./components/Header";
import RightSide from "./components/RightSide";
import LeftSide from "./components/LeftSide";
import { useSpring, animated } from 'react-spring'
import Footer from "./components/Footer";

function App() {
  const props = useSpring({ to: { opacity: 1 }, from: { opacity: 0 } })
  return (
    <animated.div style={props}>
      <Header/>
      <Row style={{ padding:"1rem 6rem 1rem 6rem", background: "linear-gradient(to right, #ece9e6, #ffffff)"}}>
        <Col lg={8} md={10} sm={12} xs={24}>
          <LeftSide/>
        </Col>
        <Col lg={16} md={14} sm={12} xs={24}>
          <RightSide/>
        </Col>
      </Row>
      <Footer/>
    </animated.div>
  );
}

export default App;
