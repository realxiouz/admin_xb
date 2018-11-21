import React from 'react'
import './index.scss'
import {Avatar, Dropdown, Menu} from 'antd'
import { Link } from 'react-router-dom'

export default class TopBar extends React.Component {
  render() {
    const menu = (
      <Menu>
        <Menu.Item key="1"><Link to='/manage/message'>消息</Link></Menu.Item>
        <Menu.Item key="2"><Link to='/login'>退出</Link></Menu.Item>
      </Menu>
    )
    return (
      <div className='top-bar'>
        <span className='title'>知了快讯发布客户端&nbsp;&nbsp;<span>v1.0</span></span>
        <div>
          <Dropdown overlay={menu} trigger={['hover']}>
            <Avatar
              size={50}
              style={{ backgroundColor: '#87d068' }}
            >admin</Avatar>
          </Dropdown>
        </div>
      </div>
    )
  }
}