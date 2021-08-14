import React, { Component } from 'react';



import {
  Layout,
  Menu,
  Row,
  Col,
  Card,
  // Breadcrumb,
  // List,
  // Icon, 
  // Button
} from 'antd';
// import './detail.less'
import ReactMarkdown from "react-markdown";
import "github-markdown-css/github-markdown.css";
// import MarkdownIt from "markdown-it";
import { getPost } from '../../api'

// import { Link } from 'react-router-dom';
import {
  // Switch, 
  // Route, 
  // HashRouter,
  // useParams
} from 'react-router-dom'

// Breadcrumb
// Avatar
import './style.css'

const { Header, Content } = Layout;



class Article extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "",
      content: ""
    }
    // this.mdParser = new MarkdownIt(/* Markdown-it options */);
  }

  componentWillMount () {
    // console.log(useParams)
    // const {id} = useParams()
    const { id } = this.props.match.params
    // console.log(this.props)
    // console.log(id)
    getPost(id)
      .then(data => {
        const { title, article_detail: { content } } = data
        this.setState({ title, content })
      })

  }

  render () {
    return (
      <div>
        <Layout className="layout">
          <Header className="home-header">
            {/* <Row type="flex" justify="center" align="middle" style={{ padding: '0 50px' }}> */}
            <Row type="flex" justify="center" align="middle" >
              <Col span={12}>
                <div className="logo" />
                <Menu
                  theme="dark"
                  mode="horizontal"
                  defaultSelectedKeys={['1']}
                  style={{ lineHeight: '64px' }}
                >
                  <Menu.Item key="1">首页</Menu.Item>
                </Menu>
              </Col>
            </Row>
          </Header>
          {/* <Content style={{ padding: '0 50px' }}> */}
          <Content >

            <Row type="flex" justify="center" style={{marginTop:16}}>
              {/* <Row style={{}}> */}
              {/* <div className="site-card-border-less-wrapper markdown-body"> */}
              <Col span={8}>
                <Card size="default"

                  // title={
                  //   <h1>{this.state.title}</h1>
                  // }
                  style={{ minHeight: 280, marginRight: 16 }}
                  bodyStyle={{ padding: '0 24px' }}
                  bordered={false}
                >
                  <div className="markdown-body">
                    <ReactMarkdown children={this.state.content} />
                  </div>

                </Card>
              </Col>

              {/* <div style={{ background: 'red', padding: 24, }}></div> */}
              <Col span={4}>
                <Card size="default" style={{ minHeight: 200, marginRight: 16 }}>
                </Card>
              </Col>

            </Row>

          </Content>
        </Layout>
      </div >
    );
  }
}

export default Article;