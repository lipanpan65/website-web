import React, { Component } from 'react';
import { Layout, Menu, Icon } from 'antd';
import LeftNav from '../../components/LeftNav'
import Container from '../../components/Container';
import "./style.css"

const { Header, Sider, Content } = Layout;


class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapsed: false,
    }
  }


  toggle = () => {
    console.log("this.click")
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  render () {
    return (
      <div>
        <Layout>
          <Sider collapsible collapsed={this.state.collapsed}>
            <LeftNav></LeftNav>
          </Sider>
          <Layout>
            <Header style={{ background: '#fff', padding: 0 }}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                onClick={this.toggle.bind(this)}
              />
            </Header>
            <Content
              style={{
                margin: '24px 16px',
                padding: 24,
                background: '#fff',
                minHeight: 280,
              }}
            >
              <Container />
            </Content>
          </Layout>
        </Layout>
      </div>

    );
  }
}



export default Admin;

