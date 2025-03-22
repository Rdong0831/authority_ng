import { Component, OnInit } from '@angular/core';
import { checkData } from 'src/app/common/common';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: [ './products.component.scss' ]
})
export class ProductsComponent implements OnInit {

  products = [
    {
      name: 'product_i7dnxc',
      created_at: '2022-11-21 14:54:50',
      display_name: 'New Product - i7dnxc',
      image: 'https://cdn.casbin.org/img/casdoor-logo_1185x256.png',
      tag: 'New Product - i7dnxc',
      currency: 'USD',
      price: 300,
      quantity: 99,
      sold: 5,
      state: 'Published',
      payment_provider: [ 'provider_storage_aliyun_oss', 'provider_casdoor_github' ]
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
