import React from 'react'
import { Space, Typography } from 'antd'
import { useSpring, animated } from 'react-spring'

const { Title, Text } = Typography

const Profile = () => {
  const propsTitleAnimation = useSpring({
    from: { opacity: 0},
    to: { opacity: 1 },
    delay: 1119
  })
  const propsInfoAnimation = useSpring({
    from: { opacity: 0},
    to: { opacity: 1 },
    delay: 2000
  })
  return (
    <div>
      <Space direction='vertical'>
        <animated.h1 style={propsTitleAnimation}>
          <Title style={{ marginBottom: 0 }}>Profile</Title>
        </animated.h1>
        <animated.p style={propsInfoAnimation}>
          <Text>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, sint harum vitae omnis inventore soluta labore quibusdam rem ipsum ullam facilis! Eveniet dolor hic voluptas enim, distinctio voluptatibus quae mollitia.
          </Text>
        </animated.p>
      </Space>
    </div>
  )
}

export default Profile