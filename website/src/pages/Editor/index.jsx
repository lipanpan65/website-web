import React from "react";

import { Row, Col, Menu, Dropdown, Icon, Popover, Avatar } from "antd";
import { Link } from "react-router-dom";

// import { useParams } from "react-router-dom";
// import qs from "querystring";
import ReactMarkdown from "react-markdown";
import MarkdownIt from "markdown-it";
import "react-markdown-editor-lite/lib/index.css";
import MdEditor from "react-markdown-editor-lite";
// import content from "./content"; 删除
import "./index.less";
import "./index.css";
// import {
//     reqArticleDraftCreate,
//     reqArticleDraftUpdate,
//     reqArticleDraftPublish,
//     reqArticleDetail,
// } from "../../api";




// FIXME: 测试一个插件的使用
import { Input, Button } from "antd";

const text = <span>Title</span>;
const content = (
    <div>
        <p>Content</p>
        <p>Content</p>
    </div>
);

// const buttonWidth = 70;

const PLUGINS = undefined;
export default class Editro extends React.Component {
    constructor(props) {
        super(props);
        this.renderHTML = this.renderHTML.bind(this);

        this.mdParser = new MarkdownIt({
            html: true,
            linkify: true,
            typographer: true,
            highlight(str, lang) {
                /*
                      if (lang && hljs.getLanguage(lang)) {
                        try {
                          return hljs.highlight(lang, str).value
                        } catch (__) {}
                      }
                      return '' // use external default escaping
                      */
            },
        });
        this.state = {
            article_content: "", // 文章输入内容
            title: "", // 文章标题
            id: 0,
        };
    }

    // queryToString = (search) => qs.parse(search);
    // https://www.kancloud.cn/study_team/json_study/719150

    // console.log(qs.parse(search));

    // handleEditArticle = async (id) => {
    //     const data = await reqArticleDetail(id);
    //     const { title, content } = data;
    //     this.setState({ id, title, article_content: content });
    // };

    componentWillMount() {
        // const id = this.queryToString(this.props.location.search)["?id"];
        // const { edit } = this.props.location.state;
        // const { id } = this.props.location.query;

        // const { status } = this.props.location.state;
        // debugger
        // switch (status) {
        //     case "edit":
        //         const { id } = this.props.location.query;
        //         this.handleEditArticle(id);
        //         break;
        //     default:
        //         const { title, article_content } = this.state;
        //         reqArticleDraftCreate(title, article_content).then((data) => {
        //             const { id, title, article_content } = data;
        //             this.setState({ id, title, article_content });
        //         });
        //         break;
        // }
    }

    // handlePublishArticle = () => {
    //     const { id, title, article_content } = this.state;
    //     reqArticleDraftPublish(id, title, article_content).then((res) => console.log(res));
    // };

    /**
     * 文章编辑触发事件
     * @param {编辑对象：it.text it.html} it
     * @param {*} event
     */
    handleEditorChange = (it, event) => {
        this.setState({ article_content: it.text }, () => {
            // const { id, title, article_content } = this.state;
            // reqArticleDraftUpdate(id, title, article_content).then((data) => { console.log(data); });
        });
    };

    handleImageUpload = (file) => {
        return new Promise((resolve) => {
            const reader = new FileReader();
            reader.onload = (data) => {
                // @ts-ignore
                resolve(data.target.result);
            };
            reader.readAsDataURL(file);
        });
    };

    onCustomImageUpload = (event) => {
        console.log("onCustomImageUpload", event);
        return new Promise((resolve, reject) => {
            //   const result = window.prompt('Please enter image url here...');
            //   resolve({ url });
            // })
        });
    };

    handleGetMdValue = () => {
        if (this.mdEditor) {
            alert(this.mdEditor.getMdValue());
        }
    };

    handleGetHtmlValue = () => {
        if (this.mdEditor) {
            alert(this.mdEditor.getHtmlValue());
        }
    };

    // 设置文章输入内容
    handleSetValue = () => {
        const article_content = window.prompt("Content");
        this.setState({
            article_content,
        });
    };

    renderHTML(text) {
        // return this.mdParser.render(text);
        // Using react-markdown
        return React.createElement(ReactMarkdown, {
            source: text,
        });
    }

    // https://blog.csdn.net/weixin_43851769/article/details/88104460 获取input值的第一种方式
    // handleGetAritleTitle = (e) => {
    //     const title = e.target.value;
    //     this.setState({ title });
    // };

    menu = () => (
        <Menu>
            <Menu.Item key="0">
                <Link to={"/editor"}>
                    <a
                        className="ant-dropdown-link"
                        onClick={(e) => e.preventDefault()}
                        href="#!"
                    >
                        <Icon type="edit" style={{ marginRight: 10 }} />
                        写文章
                    </a>
                </Link>
            </Menu.Item>
            <Menu.Item key="1">
                <Link to={"/drfts"}>
                    <a
                        className="ant-dropdown-link"
                        onClick={(e) => e.preventDefault()}
                        href="#!"
                    >
                        <Icon type="file-text" style={{ marginRight: 10 }} />
                        草稿
                    </a>{" "}
                </Link>
            </Menu.Item>
            <Menu.Divider />
            <Menu.Item key="3">
                <Link to={"/user"}>
                    <a
                        className="ant-dropdown-link"
                        onClick={(e) => e.preventDefault()}
                        href="#!"
                    >
                        我的主页
                    </a>
                </Link>
            </Menu.Item>
        </Menu>
    );

    render() {
        return (
            // <div className="demo-wrap">
            <div className="editor-box">
                {/* <div className="editor-header"> */}
                {/* <Row className='editor-header'> */}
                <Row >
                    <Col span={12} style={{ paddingRight: 14, cursor: "pointer", height: '100%' }}>
                        <input
                            placeholder="请输入文章标题..."
                            // style={{
                            //     fontSize: 24,
                            //     fontWeight: 500,
                            //     border: 'none',
                            //     outline: 'none',
                            //     color: '#1d2129',
                            //     height: '100%'
                            // }}
                        >
                        </input>
                    </Col>
                    <Col span={1}>

                    </Col>
                    <Col span={2} style={{
                        // display: 'flex',
                        // textAlign: 'center',
                        // verticalAlign: 'middle',
                        // alignItems: 'center',
                        // height: '100%',
                        // // background: 'aqua',
                        // justifyContent: 'center'
                    }}>
                        <Button type='primary' onClick={this.handlePublishArticle}>草稿箱</Button>
                    </Col>
                    <Col span={2}
                        // style={{
                        //     display: 'flex',
                        //     textAlign: 'center',
                        //     verticalAlign: 'middle',
                        //     alignItems: 'center',
                        //     height: '100%',
                        //     // background: 'aqua',
                        //     justifyContent: 'center'
                        // }}
                    >
                        <Button type='primary' onClick={this.handlePublishArticle}>发布</Button>
                    </Col>
                    {/* <Col span={1}></Col> */}
                    <Col span={2}
                        // style={{
                        //     display: 'flex',
                        //     textAlign: 'center',
                        //     verticalAlign: 'middle',
                        //     alignItems: 'center',
                        //     height: '100%',
                        //     // background: 'aqua',
                        //     justifyContent: 'center'
                        // }}
                    >
                        <Dropdown
                            overlay={this.menu}
                            trigger={["click"]}
                            placement="bottomRight"
                        >
                            <Avatar size="large" icon="user" />
                        </Dropdown>
                    </Col>

                </Row>

                <div className="editor-wrap" style={{ marginTop: "0px" }}>
                    <MdEditor
                        ref={(node) => (this.mdEditor = node || undefined)}
                        value={this.state.article_content}
                        style={{ height: "800px", width: "100%" }}
                        renderHTML={this.renderHTML}
                        plugins={PLUGINS}
                        config={{
                            view: {
                                menu: true,
                                md: true,
                                html: true,
                                fullScreen: true,
                                hideMenu: true,
                            },
                            table: {
                                maxRow: 5,
                                maxCol: 6,
                            },
                            imageUrl: "https://octodex.github.com/images/minion.png",
                            syncScrollMode: ["leftFollowRight", "rightFollowLeft"],
                        }}
                        onChange={this.handleEditorChange}
                        onImageUpload={this.handleImageUpload}
                        onFocus={(e) => console.log("focus", e)}
                        onBlur={(e) => console.log("blur", e)}
                    // onCustomImageUpload={this.onCustomImageUpload}
                    />
                </div>
            </div>
        );
    }
}



// https://harrychen0506.github.io/react-markdown-editor-lite/