import React, { Component, Fragment } from 'react';
import { Layout, Menu, Icon } from 'antd';
import menuList from '../config/router';
const { Header, Sider, Content } = Layout;

const { SubMenu } = Menu

class LeftNav extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    console.log(menuList)
  }


  // 无子集的情况下
  renderMenu = (firstItem) => {
    const { title, key, icon } = firstItem
    return (<Menu.Item key={key}>{/* <Icon type="desktop" /> */}<span>{title}</span></Menu.Item>)
  }

  // 子集菜单处理
  renderSubMenu = (firstItem) => {
    const { title, key, childs } = firstItem
    return (
      <SubMenu key={key}
        title={
          <span>
            {/* <Icon type="team" /> */}
            <span>{title}</span>
          </span>
        }
      >
        {
          childs && childs.map(item => {
            return item.childs && item.childs.length > 0 ? this.renderSubMenu(item) : this.renderMenu(item)
          })
        }
      </SubMenu>
    )
  }







  render () {
    return (
      <Fragment>
        <div className='logo'></div>
        <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
          {
            menuList.length > 0 && menuList.map(firstItem => {
              return firstItem.childs && firstItem.childs.length > 0 ? this.renderSubMenu(firstItem) : this.renderMenu(firstItem)
            })
          }
          {/* <Menu.Item key="1">
            <Icon type="pie-chart" />
            <span>Option 1</span>
          </Menu.Item>
          <Menu.Item key="2">
            <Icon type="desktop" />
            <span>Option 2</span>
          </Menu.Item>
          <SubMenu
            key="sub1"
            title={
              <span>
                <Icon type="user" />
                <span>User</span>
              </span>
            }
          >
            <Menu.Item key="3">Tom</Menu.Item>
            <Menu.Item key="4">Bill</Menu.Item>
            <Menu.Item key="5">Alex</Menu.Item>
          </SubMenu>
          <SubMenu
            key="sub2"
            title={
              <span>
                <Icon type="team" />
                <span>Team</span>
              </span>
            }
          >
            <Menu.Item key="6">Team 1</Menu.Item>
            <Menu.Item key="8">Team 2</Menu.Item>
          </SubMenu>
          <Menu.Item key="9">
            <Icon type="file" />
            <span>File</span>
          </Menu.Item> */}
        </Menu>
      </Fragment>
    );
  }
}

export default LeftNav;


{/* <div className="logo" />
<Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
  <Menu.Item key="1">
    <Icon type="user" />
    <span>nav 1</span>
  </Menu.Item>
  <Menu.Item key="2">
    <Icon type="video-camera" />
    <span>nav 2</span>
  </Menu.Item>
  <Menu.Item key="3">
    <Icon type="upload" />
    <span>nav 3</span>
  </Menu.Item>
</Menu> */}