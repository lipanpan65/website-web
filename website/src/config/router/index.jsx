const router = [
  {
    title: "控制台",
    icon: 'home',
    key: '/operation/'
  }, {
    title: "用户管理",
    icon: 'laptop',
    key: '/operation/user/',
    childs: [
      {
        title: '用户列表',
        key: '/operation/user/list/',
        icon: '',
      }, {
        title: '添加用户',
        key: '/home/general/icon',
        icon: '',
        childs: [
          {
            title: '部门列表',
            key: '/home/navigation/dropdown2',
            icon: '',
          }, {
            title: '部门列表',
            key: '/home/navigation/menu1',
            icon: 'laptop',
          }
        ]
      }
    ]
  }, {
    title: "部门管理",
    icon: 'bars',
    key: '/home/navigation',
    childs: [
      {
        title: '部门列表',
        key: '/home/navigation/dropdown',
        icon: '',
      }, {
        title: '部门列表',
        key: '/home/navigation/menu',
        icon: 'laptop',
      }
    ]
  }, {
    title: "职位管理",
    icon: 'edit',
    key: '/home/entry',
    childs: [
      {
        title: '职位管理',
        key: '/home/entry/form1/basic-form',
        icon: '',
      }, {
        title: '职位列表',
        key: '/home/entry/form2/basic-form',
        icon: 'laptop',
      }
    ]
  }, {
    title: "请假",
    icon: 'info-circle-o',
    key: '/home/about'
  }, {
    title: "加班",
    icon: 'info-circle-o',
    key: '/home/about/add'
  },
]

export default router