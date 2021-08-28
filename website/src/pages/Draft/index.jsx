
import React, { Component } from 'react';
import {
  Layout,
  Menu,
  Row,
  Col,
  Card,
  // Breadcrumb,
  List,
  Icon,
  Button,
  Dropdown,
  Modal
} from 'antd';
import { dateFormate } from "../../utils";
import { getDraftList, reqArticleDraftDelete } from '../../api'
// import "./style.css"
import { Link } from 'react-router-dom';

const { Header, Content } = Layout;
const { confirm } = Modal;





// const data = [
//   {
//     title: 'Ant Design Title 1',
//   },
//   {
//     title: 'Ant Design Title 2',
//   },
//   {
//     title: 'Ant Design Title 3',
//   },
//   {
//     title: 'Ant Design Title 4',
//   },
// ];



class DescriptionNode extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // 编辑按钮
  handleEditItem = (id) => {
    console.log("编辑按钮", id)
    this.props.history.replace({
      pathname: `/editor/drafts/${id}`,
      query: { 1: "x" },
      state: { xxx: "xxx" }
    })
  };

  // handleDeleteItem = (id) => {



  //   // reqArticleDraftDelete(id).then((res) => console.log(res));
  //   // this.props.getArticleDraftList();
  // };

  handleMenuClick = (e) => {
    const { key } = e;
    const { id } = this.props.item
    // console.log(this.props)
    if (key === "delete") {
      this.props.showDeleteConfirm(id)
    } else {
      this.handleEditItem(id);
    }
  };




  render () {
    const { id, create_time } = this.props.item
    const menu = (
      <Menu onClick={this.handleMenuClick}>
        {/* <Menu > */}
        <Menu.Item key="edit">
          <Link
            to={{
              pathname: `/editor/drafts/${id}`,
              // search: `?id=${id}`,
              query: { id: id },
              // hash: "#the-hash",
              // state: { status: "edit" },
            }}
          >
            <Icon type="edit" style={{ marginRight: 10 }} />
            编辑
          </Link>
        </Menu.Item>
        <Menu.Item key="delete">
          <Icon type="delete" style={{ marginRight: 10 }} />
          删除
        </Menu.Item>
      </Menu>
    );
    return (
      <div>
        <span>{dateFormate(create_time)}</span>
        <span>
          <Dropdown overlay={menu} trigger={["click"]}>
            <Button type="link">
              <Icon type="ellipsis" />
            </Button>
          </Dropdown>
        </span>
      </div>
    );
  }
}




class Draft extends Component {
  constructor(props) {
    super(props);
    this.state = { data: [] };
  }

  showDeleteConfirm = (id) => {
    confirm({
      title: '确定要删除草稿吗？',
      okText: '确定',
      okType: 'danger',
      cancelText: '取消',
      onOk: () => {
        reqArticleDraftDelete(id)
          .then((data) => {
            const { success } = data
            if (success) {
              this.getArticleDraftList()
            }
          })
      },
    });
  }


  getArticleDraftList = () => {
    getDraftList()
      .then((data) => this.setState({ data }))
  };




  componentWillMount () {
    this.getArticleDraftList();
  }



  render () {
    console.log("draft")
    console.log(this.props)
    const { data = [] } = this.state;
    console.log(this.state)
    return (
      <div>
        <Layout className="layout">
          <Header className="home-header">
            <Row type="flex" justify="center" align="middle" >
              <Col span={10}><div className="logo" /></Col>
              <Col span={2}>
                <Button type="primary" onClick={this.toEditor}>
                  写文章
                </Button>
              </Col>
            </Row>
          </Header>
          <Content >
            <Row type="flex" justify="center" style={{ marginTop: 16 }}>
              {/* align="middle" */}
              <Col span={10}>
                <Card size="default"
                  title={`文章草稿 (${data.length})`}
                  style={{ minHeight: 280, marginRight: 16 }}
                  bodyStyle={{ padding: '0 24px' }}
                >
                  <List
                    itemLayout="vertical"
                    dataSource={data}
                    renderItem={item => (
                      <List.Item key={item.title}>
                        <List.Item.Meta
                          title={<Link
                            to={`/editor/drafts/${item.id}/`}
                            replace>{item.title}</Link>}
                          description={<DescriptionNode
                            {...this.props}
                            item={item}
                            showDeleteConfirm={this.showDeleteConfirm} />
                          }
                        />
                      </List.Item>
                    )}
                  />
                </Card>
              </Col>
            </Row>
          </Content>
        </Layout>
      </div>
    );
  }
}

export default Draft;

