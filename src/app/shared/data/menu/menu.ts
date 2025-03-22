export const menu = [
  {
    label: '首頁',
    routerLink: [ '/main/dashboard' ],
    visible: true
  },
  {
    label: '組織',
    routerLink: [ '/main/organizations' ],
    visible: true
  },
  {
    label: '使用者',
    routerLink: [ '/main/users' ],
    visible: true
  },
  {
    label: '角色',
    routerLink: [ '/main/roles' ],
    visible: true
  },
  {
    label: '權限',
    routerLink: [ '/main/permissions' ],
    visible: true
  },
  {
    label: '模型',
    // routerLink: [ '/main/models' ],
    visible: true
  },
  {
    label: '適配器',
    visible: true
  },
  {
    label: '提供者',
    routerLink: [ '/main/providers' ],
    visible: true
  },
  {
    label: '站台',
    routerLink: [ '/main/applications' ],
    visible: true
  },
  {
    label: '資源',
    routerLink: [ '/main/resources' ],
    visible: true
  },
  {
    label: '日誌',
    routerLink: [ '/main/records' ],
    visible: true
  },
  {
    label: 'Token',
    routerLink: [ '/main/token' ],
    visible: true
  },
  {
    label: 'Webhook',
    // routerLink: [ '/main/webhook' ],
    visible: true
  },
  {
    label: '同步器',
    // routerLink: [ '/main/syncers' ],
    visible: true
  },
  {
    label: '證書',
    routerLink: [ '/main/certs' ],
    visible: true
  },
  {
    label: '商品',
    // routerLink: [ '/main/products' ],
    visible: true
  },
  {
    label: '付款',
    outerLink: [ '/main/payments' ],
    visible: false
  },
  {
    label: '系統資訊',
    visible: false
  },
  // {
  //   label: 'API文檔',
  //   visible: false
  // }
];

export const overlay = [
  {
    label: '首頁',
    routerLink: [ '/main/dashboard' ],
    visible: false
  },
  {
    label: '組織',
    routerLink: [ '/main/organizations' ],
    visible: false
  },
  {
    label: '使用者',
    routerLink: [ '/main/users' ],
    visible: false
  },
  {
    label: '角色',
    routerLink: [ '/main/roles' ],
    visible: false
  },
  {
    label: '權限',
    routerLink: [ '/main/permissions' ],
    visible: false
  },
  {
    label: '模型',
    visible: false
  },
  {
    label: '適配器',
    visible: false
  },
  {
    label: '提供者',
    routerLink: [ '/main/providers' ],
    visible: false
  },
  {
    label: '站台',
    routerLink: [ '/main/applications' ],
    visible: false
  },
  {
    label: '資源',
    routerLink: [ '/main/resources' ],
    visible: false
  },
  {
    label: '日誌',
    routerLink: [ '/main/records' ],
    visible: false
  },
  {
    label: 'Token',
    routerLink: [ '/main/token' ],
    visible: false
  },
  {
    label: 'Webhook',
    // routerLink: [ '/main/webhook' ],
    visible: false
  },
  {
    label: '同步器',
    // routerLink: [ '/main/syncers' ],
    visible: false
  },
  {
    label: '證書',
    routerLink: [ '/main/certs' ],
    visible: false
  },
  {
    label: '商品',
    // routerLink: [ '/main/products' ],
    visible: false
  },
  {
    label: '付款',
    // routerLink: [ '/main/payments' ],
    visible: true
  },
  {
    label: '系統資訊',
    visible: true
  },
  // {
  //   label: 'API文檔',
  //   visible: true
  // }
];

export const memberMenu = [
  {
    label: '個人資料',
    // routerLink: ['/main/account-info'],
    routerLinkActiveOptions: {
      exact: true
    },
    icon: 'pi pi-fw pi-user-edit'
  },
  {
    label: '登出',
    icon: 'pi pi-fw pi-sign-out',
  },
];

export const translateMenu = [
  {
    label: 'English',
    icon: ''
  },
  {
    label: '繁體中文',
    icon: '',
  },
  {
    label: 'Español',
    icon: '',
  },
  {
    label: 'Français',
    icon: '',
  },
  {
    label: 'Deutsch',
    icon: '',
  },
  {
    label: '日本語',
    icon: '',
  },
  {
    label: '한국어',
    icon: '',
  },
  {
    label: 'Русский',
    icon: '',
  },
];
