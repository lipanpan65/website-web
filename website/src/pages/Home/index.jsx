
import React, { Component } from 'react';
import {
  Layout,
  Menu,
  Row,
  Col,
  Card,
  Breadcrumb,
  List,
  // Icon, 
  Button,
  Modal
} from 'antd';
import { getPosts } from '../../api'
import "./style.css"
import { Link } from 'react-router-dom';
import LoginForm from '../Login'

// import {Switch,Route,HashRouter}  from 'react-router-dom'

// Breadcrumb
// Avatar

const { Header, Content } = Layout;
// Footer


// const IconText = ({ type, text }) => (
//   <span>
//     <Icon type={type} style={{ marginRight: 8 }} />
//     {text}
//   </span>
// );

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: [],
      visible: false
    }
  }

  getPostsList = () => {
    // 调用接口请求异步获取数据
    getPosts()
      .then((data) => this.setState({ posts: data }))
  };

  componentWillMount () {
    this.getPostsList()
  }

  toEditor = () => {
    this.props.history.push({
      pathname: "/editor/drafts/new"
    })
  }

  toLogin = () => {


  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  handleCancel = e => {
    console.log(e);
    this.setState({
      visible: false,
    });
  };

  render () {

    return (
      <div>
        <Layout className="layout">
          <Header className="home-header">
            {/* <Row type="flex" justify="center" align="middle" style={{ padding: '0 50px' }}> */}
            <Row type="flex" justify="center" align="middle" >
              <Col span={10}>
                <div className="logo" />
                <Menu
                  theme="dark"
                  mode="horizontal"
                  defaultSelectedKeys={['1']}
                  style={{ lineHeight: '64px' }}
                >
                  <Menu.Item key="1">首页</Menu.Item>
                  {/* <Menu.Item key="2">nav 2</Menu.Item> */}
                  {/* <Menu.Item key="3">nav 3</Menu.Item> */}
                </Menu>
              </Col>
              <Col span={2}>
                <Button type="primary" onClick={this.toEditor}>
                  写文章
                </Button>
              </Col>
              <Col>
                <Button type="primary" onClick={this.showModal}>
                  登录
                </Button>
              </Col>
            </Row>
          </Header>
          {/* <Content style={{ padding: '0 50px' }}> */}
          <Content >

            {/* <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb> */}
            {/* <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>

                        </div> */}
            <Row type="flex" justify="center" style={{ marginTop: 16 }}>
              {/* align="middle" */}
              <Col span={12}>
                <Card size="default" title={
                  <Breadcrumb separator="|">
                    <Breadcrumb.Item>
                      热门
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                      最新
                    </Breadcrumb.Item>
                    <Breadcrumb.Item>
                      热榜
                    </Breadcrumb.Item>
                  </Breadcrumb>
                } style={{ minHeight: 280, marginRight: 16 }}
                  bodyStyle={{ padding: '0 24px' }}
                >

                  <List
                    // itemLayout="horizontal"
                    itemLayout="vertical"
                    dataSource={this.state.posts}
                    renderItem={item => (
                      <List.Item
                        key={item.title}
                      // actions={[
                      //   <IconText type="star-o" text="156" key="list-vertical-star-o" />,
                      //   <IconText type="like-o" text="156" key="list-vertical-like-o" />,
                      //   <IconText type="message" text="2" key="list-vertical-message" />,
                      // ]}
                      >
                        <List.Item.Meta
                          // avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
                          // title={<a href="https://ant.design">{item.title}</a>}
                          title={
                            <Link to={`/post/${item.id}/`}>
                              {/* <h3>{item.title}</h3> */}
                              {item.title}
                            </Link>
                          }
                        // description="Ant Design, a design language for background applications, is refined by Ant UED Team"
                        />
                      </List.Item>
                    )}
                  />
                </Card>
                {/* <div style={{
                                    background: '#fff',
                                    // padding: 24, 
                                    minHeight: 280,
                                    marginRight: 16
                                }}>
                                    <Card size="small" title="Small size card" extra={<a href="#">More</a>} style={{ width: 300 }}>
                                    </Card>
                                    test
                                </div> */}
              </Col>

              {/* <div style={{ background: 'red', padding: 24, }}></div> */}

              {/* <Col span={4}>
                <Card size="default" style={{ minHeight: 200, marginRight: 16 }}>
                </Card>
              </Col>
               */}
              <Modal
                title="登录"
                visible={this.state.visible}
                // onOk={this.handleOk}
                onCancel={this.handleCancel}
                footer={null}
              >
                <LoginForm />
              </Modal>
            </Row>

          </Content>
          {/* <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer> */}
        </Layout>
      </div>
    );
  }
}
export default Home;






