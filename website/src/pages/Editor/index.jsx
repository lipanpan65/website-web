// 'use strict';
import React from 'react'
import {
  Row, Col,
  // Menu,
  // Dropdown,
  // Icon,
  // Popover,
  // Avatar,
  Button
} from "antd";
// import ReactDOM from 'react-dom'
import MdEditor from 'react-markdown-editor-lite'
import MarkdownIt from 'markdown-it'
import emoji from 'markdown-it-emoji'
import subscript from 'markdown-it-sub'
import superscript from 'markdown-it-sup'
import footnote from 'markdown-it-footnote'
import deflist from 'markdown-it-deflist'
import abbreviation from 'markdown-it-abbr'
import insert from 'markdown-it-ins'
import mark from 'markdown-it-mark'
import tasklists from 'markdown-it-task-lists'
import hljs from 'highlight.js'
import 'highlight.js/styles/atom-one-light.css'
// import 'highlight.js/styles/github.css'
// import './index.less';
import 'react-markdown-editor-lite/lib/index.css';


import { createPosts, updatePosts } from '../../api'


export default class Editor extends React.Component {
  mdEditor = null
  mdParser = null
  constructor(props) {
    super(props)
    this.state = {
      title: "",
      text: "",
      id: null,
    }

    // initial a parser
    this.mdParser = new MarkdownIt({
      html: true,
      linkify: true,
      typographer: true,
      highlight: function (str, lang) {
        if (lang && hljs.getLanguage(lang)) {
          try {
            return hljs.highlight(lang, str).value
          } catch (__) { }
        }
        return '' // use external default escaping
      }
    })
      .use(emoji)
      .use(subscript)
      .use(superscript)
      .use(footnote)
      .use(deflist)
      .use(abbreviation)
      .use(insert)
      .use(mark)
      .use(tasklists, { enabled: this.taskLists })
    this.renderHTML = this.renderHTML.bind(this)

  }

  // componentWillMount () {
  //   // this.createPost()
  //   // this.updatePost()
  // }



  createPost = async () => {
    const isUpdate = !!this.state.id
    let { title, text, id } = this.state
    if (title === "") {
      title = "无标题"
    }
    // debugger
    if (text && !isUpdate && !id) {
      const post = await createPosts(title, text)
      const { id } = post
      this.setState({ id })
      console.log(post)
      // setTimeout(() => {
      //   const { id } = post
      //   this.setState({ id })
      // })
    }
  }



  updatePost = () => {

    console.log('执行了')
    const isUpdate = !!this.state.id
    let { id: pk, title, text } = this.state
    if (title === "") {
      title = "无标题"
    }
    if (isUpdate) {
      updatePosts(pk, title, text)
    }
  }





  handleEditorChange = (data, event) => {
    // const { text, html } = data
    console.log("state", this.state)
    const { text } = data
    this.setState({ text })

  }

  handleImageUpload (file, callback) {
    const reader = new FileReader()
    reader.onload = () => {
      // const convertBase64UrlToBlob = (urlData) => {
      //   let arr = urlData.split(','), mime = arr[0].match(/:(.*?);/)[1]
      //   let bstr = atob(arr[1])
      //   let n = bstr.length
      //   let u8arr = new Uint8Array(n)
      //   while (n--) {
      //     u8arr[n] = bstr.charCodeAt(n)
      //   }
      //   return new Blob([u8arr], { type: mime })
      // }
      // TODO 不能删除
      // const blob = convertBase64UrlToBlob(reader.result)
      setTimeout(() => {
        // setTimeout 模拟异步上传图片
        // 当异步上传获取图片地址后，执行calback回调（参数为imageUrl字符串），即可将图片地址写入markdown
        callback('https://avatars0.githubusercontent.com/u/21263805?s=40&v=4')
      }, 1000)
    }
    reader.readAsDataURL(file)
  }
  // async
  renderHTML (text) {
    // 模拟异步渲染Markdown

    this.createPost()
    this.updatePost()
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this.mdParser.render(text))
      }, 1000)
    })
  }

  toDraft = () => {
    // 去草稿箱页面
    console.log("to traft")
  }

  handleGetMdValue = () => {
    this.mdEditor && alert(this.mdEditor.getMdValue())
  }

  handleGetHtmlValue = () => {
    this.mdEditor && alert(this.mdEditor.getHtmlValue())
  }
  render () {
    return (
      <div>

        <div>
          <Row
            style={{
              height: '65px',
              display: 'flex'
            }}
          >
            <Col span={12} style={{ paddingRight: 14, cursor: "pointer", height: '100%' }}>
              <input
                placeholder="请输入文章标题..."
                // maxLength={80}
                style={{
                  fontSize: 24,
                  fontWeight: 500,
                  border: 'none',
                  outline: 'none',
                  color: '#1d2129',
                  height: '100%',
                  minWidth: 580
                  // paddingRight: 14
                }}
                value={this.state.value}
                onClick={(e) => this.setState({ title: e.target.value })}
              >
              </input>
            </Col>
            <Col span={2} style={{
              display: 'flex',
              textAlign: 'center',
              verticalAlign: 'middle',
              alignItems: 'center',
              height: '100%',
              // background: 'aqua',
              justifyContent: 'center'

            }}>
              <Button type='primary' onClick={this.toDraft}>草稿箱</Button>
            </Col>
            <Col span={2}
              style={{
                display: 'flex',
                textAlign: 'center',
                verticalAlign: 'middle',
                alignItems: 'center',
                height: '100%',
                // background: 'aqua',
                justifyContent: 'center'
              }}
            >
              <Button type='primary' onClick={this.handlePublishArticle}>发布</Button>
            </Col>
            {/* <Col span={1}></Col> */}
            {/* <Col span={2}
              style={{
                display: 'flex',
                textAlign: 'center',
                verticalAlign: 'middle',
                alignItems: 'center',
                height: '100%',
                // background: 'aqua',
                justifyContent: 'center'
              }}
            >
              <Dropdown
                overlay={this.menu}
                trigger={["click"]}
                placement="bottomRight"
              >
                <Avatar size="large" icon="user" />
              </Dropdown>
            </Col> */}

          </Row>

        </div>

        <section style={{ height: "500px" }}>
          <MdEditor
            ref={node => this.mdEditor = node}
            value={this.state.text}
            style={{ height: '400px' }}
            renderHTML={this.renderHTML}
            config={{
              view: {
                menu: true,
                md: true,
                html: true
              },
              imageUrl: 'https://octodex.github.com/images/minion.png'
            }}
            onChange={this.handleEditorChange}
            onImageUpload={this.handleImageUpload}
          />
        </section>
      </div>
    )
  }
}