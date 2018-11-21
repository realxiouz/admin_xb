import React from 'react'
import { Table, Divider, Button, Tooltip, Popconfirm, message, Modal } from 'antd'
import { Link } from 'react-router-dom'
import {getList} from '../../common/api'

class List extends React.Component {
  
  constructor(props) {
    super(props)
    this.columns = [
      {
        title: '快讯标题',
        dataIndex: 'title',
        key: 'title',
        render: text => (
          <div>{text}</div>
        )
      },
      {
        title: '快讯内容',
        dataIndex: 'content',
        width:'50%',
        key: 'content',
        render: text => (
          <div>{text}</div>
        )
      },
      {
        title: '发布时间',
        dataIndex: 'created_at',
        key: 'created_at',
        render: text => (
          <div>{text}</div>
        )
      },
      {
        title: '功能操作',
        key: 'action',
        render: (text, record) => (
          <span>
            <Tooltip placement="topLeft" title="查看" arrowPointAtCenter>
              <Button shape="circle" icon="search" onClick={_ => this.setState({visible: true})}/>
            </Tooltip>
            <Divider type="vertical" />
            <Tooltip placement="topLeft" title={record.show ? '隐藏' : '显示'} arrowPointAtCenter>
              <Button type={record.show ? 'danger' : 'primary'} shape="circle" icon="eye" />
            </Tooltip>
            <Divider type="vertical" />
            <Popconfirm title="Are you sure delete this task?" onConfirm={ e => this.handleDel(e, record.id)} okText="Yes" cancelText="No">
              <Button type="danger" shape="circle" icon="delete"/>
            </Popconfirm>
          </span>
        ),
      }
    ]
    this.state = {
      data: [],
      pagination: {},
      loading: true,
      visible: false
    }
  }

  componentDidMount() {
    this.fetch();
  }

  fetch = (page = 1) => {
    this.setState({ loading: true })
    getList({page, limit: 2}).then( res => {
      this.setState({
        loading: false,
        data: res.data.lists,
        pagination: {total: res.data.other.count, pageSize: 2, onChange: page => this.fetch(page), showQuickJumper: true}
      })
    }).catch(e => console.log(e))
  }

  handleDel(e, id) {
    // todo
    message.error(`id:${id} delete`)
  }
  render() {
    return(
      <div 
        style={{padding: '20px'}}
      >
        <Button
          style={{marginBottom:'10px'}}
          type='primary'><Link to='/manage/new'>发布快讯</Link></Button>
        <Table
          bordered
          loading={this.state.loading}
          pagination={this.state.pagination}
          columns={this.columns}
          dataSource={this.state.data}
          rowKey={record => record.id}/>
        
        <Modal
          title="Basic Modal"
          maskClosable={true}
          visible={this.state.visible}
        >
          <div>
            {/* <img src="./phone.png" alt=""/> */}
          </div>
        </Modal>
      </div>
      
    )
  }
}

export default List