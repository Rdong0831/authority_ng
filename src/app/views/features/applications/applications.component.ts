import { Component, OnInit } from '@angular/core';
import { checkData } from 'src/app/common/common';

@Component({
  selector: 'app-applications',
  templateUrl: './applications.component.html',
  styleUrls: ['./applications.component.scss']
})
export class ApplicationsComponent implements OnInit {

  applications = [
    {
      name: 'app-gitea',
      created_at: '2022-06-01 14:54:50',
      display_name: 'Git at Casbin',
      logo: 'https://cdn.casbin.org/img/casdoor-logo_1185x256.png',
      organization: 'casbin',
      providers: ['provider_storage_aliyun_oss', 'provider_casdoor_github', 'provider_casdoor_google', 'provider_casdoor_qq', 'provider_casdoor_wechat', 'provider_casdoor_facebook', 'provider_casdoor_gitee'],
      action: '',
    },
    {
      name: 'cas-java-app',
      created_at: '2022-04-04 20:33:18	',
      display_name: 'CAS Java App',
      logo: 'https://cdn.casbin.com/casdoor/resource/built-in/admin/cas.png?t=1649075840631499100',
      organization: 'casbin',
      providers: [],
      action: '',
    },
    {
      name: 'app-casnode-gsoc',
      created_at: '2021-12-20 22:42:04	',
      display_name: 'GSoC中文社区',
      logo: 'https://cdn.casdoor.com/casdoor/resource/built-in/admin/logo.svg',
      organization: 'gsoc',
      providers: ['provider_storage_aliyun_oss', 'provider_casdoor_github', 'provider_casdoor_google', 'provider_casdoor_qq', 'provider_casdoor_wechat', 'provider_casdoor_facebook', 'provider_casdoor_gitee'],
      action: '',
    },
    {
      name: 'app-confita',
      created_at: '2021-11-26 22:26:33',
      display_name: 'Confita',
      logo: 'https://cdn.casbin.org/img/casbin_logo_1024x256.png',
      organization: 'casbin',
      providers: ['provider_storage_aliyun_oss', 'provider_casdoor_github', 'provider_casdoor_google', 'provider_casdoor_qq', 'provider_casdoor_wechat'],
      action: '',
    },
    {
      name: 'app-cert',
      created_at: '2021-10-25 21:05:30',
      display_name: 'Casbin Cert',
      logo: 'https://cdn.casbin.org/img/casbin_logo_1024x256.png',
      organization: 'casbin',
      providers: ['provider_storage_aliyun_oss', 'provider_casdoor_github', 'provider_casdoor_google', 'provider_casdoor_qq', 'provider_casdoor_wechat', 'provider_casdoor_facebook', 'provider_casdoor_gitee'],
      action: '',
    },
    {
      name: 'app-casbin-oa',
      created_at: '2021-02-14 10:45:39',
      display_name: 'Casbin OA',
      logo: 'https://cdn.casbin.org/img/casbin_logo_1024x256.png',
      organization: 'casbin',
      providers: ['provider_storage_aliyun_oss', 'provider_casdoor_github', 'provider_casdoor_google', 'provider_casdoor_qq', 'provider_casdoor_wechat', 'provider_casdoor_facebook', 'provider_casdoor_gitee'],
      action: '',
    },
    {
      name: 'app-casnode',
      created_at: '2020-12-20 22:42:04	',
      display_name: 'Casnode',
      logo: 'https://cdn.casbin.org/img/casbin_logo_1024x256.png',
      organization: 'casbin',
      providers: ['provider_casbin_sms', 'provider_casbin_email', 'provider_storage_aliyun_oss', 'provider_casdoor_github', 'provider_casdoor_google', 'provider_casdoor_qq', 'provider_casdoor_wechat', 'provider_casdoor_facebook', 'provider_casdoor_gitee', 'provider_casdoor_gitlab'],
      action: '',
    },
    {
      name: 'app-example',
      created_at: '2020-12-20 22:42:04',
      display_name: 'Example App',
      logo: 'https://cdn.casbin.org/img/casdoor-logo_1185x256.png',
      organization: 'casbin',
      providers: ['provider_casbin_email', 'provider_storage_aliyun_oss', 'provider_casdoor_github', 'provider_casdoor_google', 'provider_casdoor_qq', 'provider_casdoor_wechat', 'provider_casdoor_dingtalk', 'provider_casdoor_alipay', 'provider_casdoor_baidu', 'provider_casdoor_infoflow', 'provider_casdoor_weibo', 'provider_casdoor_wecom_internal', 'provider_casdoor_wecom_third_party', 'provider_casdoor_gitlab', 'provider_casdoor_gitee', 'provider_casdoor_lark', 'provider_casdoor_azuread', 'provider_casdoor_azuread', 'provider_casdoor_apple', 'provider_casdoor_steam', 'provider_casdoor_slack', 'provider_casdoor_okta', 'provider_casdoor_bilibili'],

      action: '',
    },
    {
      name: 'app-built-in',
      created_at: '2020-12-19 22:42:04	',
      display_name: 'Casdoor',
      logo: 'https://cdn.casbin.org/img/casdoor-logo_1185x256.png',
      organization: 'built-in',
      providers: ['provider_casbin_email', 'provider_storage_aliyun_oss', 'provider_casdoor_github', 'provider_casdoor_google', 'provider_casdoor_qq', 'provider_casdoor_wechat', 'provider_casdoor_dingtalk', 'provider_casdoor_alipay', 'provider_casdoor_baidu', 'provider_casdoor_infoflow', 'provider_casdoor_weibo', 'provider_casdoor_wecom_internal', 'provider_casdoor_wecom_third_party', 'provider_casdoor_gitlab', 'provider_casdoor_gitee', 'provider_casdoor_lark', 'provider_casdoor_azuread', 'provider_casdoor_azuread', 'provider_casdoor_apple', 'provider_casdoor_steam', 'provider_casdoor_slack', 'provider_casdoor_okta', 'provider_casdoor_bilibili'],
      action: '',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

  // providers 分段函式 split:要分割成多少塊 get:要取得哪塊
  dataSplitByAmount(data: any[], splitNum = 2, getNum = 2) {
    let realSplitNum = Math.ceil(data.length / splitNum);
    let res: any[] = [];
    for (let i = 0; i < data.length; i += realSplitNum) {
      res.push(data.slice(i, i + realSplitNum));
    }
    if (getNum > splitNum) {
      getNum = splitNum;
    }
    return res[getNum - 1];
  }

  checkData(data: any[]) {
    return checkData(data);
  }

}
