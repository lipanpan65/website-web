import React, { Component, Fragment } from 'react';
import { Layout, Menu, Icon } from 'antd';
import { Link, withRouter } from 'react-router-dom';
import menuList from '../config/router';
const { Header, Sider, Content } = Layout;

const { SubMenu } = Menu

class LeftNav extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  // 无子集的情况下
  renderMenu = (firstItem) => {
    const { title, key, icon } = firstItem
    return (<Menu.Item key={key}>{/* <Icon type="desktop" /> */}
      <Link to={key}>
        <span>{title}</span>
      </Link>
    </Menu.Item>)
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
        <Menu theme="dark" mode="inline"
          defaultSelectedKeys={['/operation/']}

        >
          {
            menuList.length > 0 && menuList.map(firstItem => {
              return firstItem.childs && firstItem.childs.length > 0 ? this.renderSubMenu(firstItem) : this.renderMenu(firstItem)
            })
          }
        </Menu>
      </Fragment>
    );
  }
}

export default withRouter(LeftNav);


