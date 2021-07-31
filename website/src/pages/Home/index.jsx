
import React, { Component } from 'react';
import { Layout, Menu, Row, Col } from 'antd';
import "./style.css"

// Breadcrumb

const { Header, Content, Footer } = Layout;

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {}
    }
    render() {
        return (
            <div>
                <Layout className="layout">
                    <Header>
                        <div className="logo" />
                        <Menu
                            theme="dark"
                            mode="horizontal"
                            defaultSelectedKeys={['1']}
                            style={{ lineHeight: '64px' }}
                        >
                            <Menu.Item key="1">首页</Menu.Item>
                            <Menu.Item key="2">nav 2</Menu.Item>
                            <Menu.Item key="3">nav 3</Menu.Item>
                        </Menu>
                    </Header>
                    <Content style={{ padding: '0 50px' }}>
                        {/* <Breadcrumb style={{ margin: '16px 0' }}>
                            <Breadcrumb.Item>Home</Breadcrumb.Item>
                            <Breadcrumb.Item>List</Breadcrumb.Item>
                            <Breadcrumb.Item>App</Breadcrumb.Item>
                        </Breadcrumb> */}
                        {/* <div style={{ background: '#fff', padding: 24, minHeight: 280 }}>

                        </div> */}
                        <Row style={{ margin: '0 auto' }}>
                            <Col span={10}>
                                <div style={{
                                    background: '#fff',
                                    padding: 24, minHeight: 280,
                                    marginRight: 16
                                }}>
                                    test
                                </div>
                            </Col>
                            <Col span={4}>
                                <div style={{ background: 'red', padding: 24, minHeight: 280 }}></div>
                            </Col>
                        </Row>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </div>
        );
    }
}

export default Home;






