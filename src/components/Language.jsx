import React from 'react'
import { Space, Typography, Rate } from 'antd'

const { Title } = Typography

const languageData = [
  {
    key: "Malagasy",
    name: "Malagasy",
    level: 5
  },
  {
    key: "French",
    name: "French",
    level: 3.5
  },
  {
    key: "English",
    name: "English",
    level: 2.5
  }
]

const Language = () => {
  return (
    <div style={{ marginTop: "1rem"}}>
        <Space direction='vertical'>
        <Title style={{ marginBottom:0}}>Languages</Title>
        <Space direction='vertical'>
          {
            languageData.map((language)=>(
              <Space key={language.key} size={"large"} style={{ display: "flex", justifyContent: "space-between"}}>
                <Title level={5}>{language.name}</Title>
                <Rate allowHalf value={language.level}/>
              </Space>
            ))
          }
        </Space>
      </Space>
    </div>
  )
}

export default Language