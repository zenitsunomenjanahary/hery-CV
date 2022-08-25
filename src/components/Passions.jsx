import React from 'react'
import { Space, Typography } from 'antd'
import { FaGuitar,FaChess,FaMusic } from "react-icons/fa";

const PassionsData = [
  {
    key: "guitar",
    label: "Guitar",
    icon: <FaGuitar size={20}/>
  },
  {
    key: "Chess",
    label: "Chess",
    icon: <FaChess size={20}/>
  },
  {
    key: "Music",
    label: "Music",
    icon: <FaMusic size={20}/>
  },
]

const { Title } = Typography;

const Passions = () => {
  return (
    <div style={{ marginTop: "1rem", marginBottom:"1rem"}}>
      <Space direction='vertical'>
        <Title style={{ marginBottom: 0 }}>Passions</Title>
        <Space direction='vertical'>
          {
            PassionsData.map((passion)=>(
              <Space align='center' key={passion.key} style={{ display: "flex", justifyContent: "space-between"}} >
                <Title level={5}>{passion.label}</Title>
                {passion.icon}
              </Space>
            ))
          }
        </Space>
      </Space>
    </div>
  )
}

export default Passions