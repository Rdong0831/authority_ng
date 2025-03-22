import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-add-provider',
  templateUrl: './add-provider.component.html',
  styleUrls: ['./add-provider.component.scss']
})
export class AddProviderComponent implements OnInit {


  organization = [
    { name: 'admin(share)' },
    { name: 'gsoc' },
    { name: 'casbin' },
    { name: 'built-in' }
  ];

  category = [
    { name: 'Captcha' },
    { name: 'Email' },
    { name: 'OAuth' },
    { name: 'Payment' },
    { name: 'SAML' },
    { name: 'SMS' },
    { name: 'Storage' }
  ]
  type = [
    { name: 'Default' },
    { name: 'SUBMAIL' }
  ]

  id!: string;

  texts: string[] = [];
  results: string[];

  constructor(
    private _location: Location,
    private route: ActivatedRoute,
  ) {
    this.route.params.subscribe(params => {
      if (params[ 'id' ]) {
        this.id = params[ 'id' ];
      }
    });
  }

  ngOnInit(): void {
  }

  back() {
    this._location.back();
  }

  // autoComplete
  search(event: any) {
    this.results = [ "aaa", "bbb", "ccc" ];
  }

  onKeyUp(event: KeyboardEvent) {
    if (event.key == "Enter") {
      let tokenInput = event.srcElement as any;
      if (tokenInput.value) {
        this.texts.push(tokenInput.value);
        tokenInput.value = "";
      }
    }
  }

  log() {
    console.log('以點擊');

  }

}
