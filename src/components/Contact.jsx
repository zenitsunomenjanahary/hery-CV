import React from 'react'
import { Space, Typography } from 'antd'
import {BsTelephoneFill} from "react-icons/bs"
import {AiTwotoneMail,AiFillGithub,AiFillLinkedin} from "react-icons/ai"
import { config,animated, useSpring } from 'react-spring'

const { Title } = Typography

const contactData = [
  {
    key: "phone",
    icon: <BsTelephoneFill size={22}/>,
    label: "034 20 460 58",
  },
  {
    key: "email",
    icon: <AiTwotoneMail size={22}/>,
    label: "heryzoldick@gmail.com",
  },
  {
    key: "github",
    icon: <AiFillGithub size={22}/>,
    label: "github.com/heryNomenjanahary",
  },
  {
    key: "linkedin",
    icon: <AiFillLinkedin size={22}/>,
    label: "Hery Nomenjanahary",
  },
]

const Contact = () => {
  const props = useSpring({
    from: { opacity: 0},
    to: { opacity: 1},
    config: config.molasses,
    delay: 1000
  })
  return (
    <animated.div style={props}>
      <Space direction='vertical' >
          <Title style={{ marginBottom:0}}>Contacts</Title>
        <Space direction='vertical'>
          {
            contactData.map((contact)=>(
              <Space key={contact.key}>
                {contact.icon}
                <Title level={5}>{contact.label}</Title>
              </Space>
            ))
          }
        </Space>
      </Space>
    </animated.div>
  )
}

export default Contact