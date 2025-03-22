import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-syncer',
  templateUrl: './add-syncer.component.html',
  styleUrls: ['./add-syncer.component.scss']
})
export class AddSyncerComponent implements OnInit {

  id!: string;

  organization = [
    {
      name: 'role-built-in',
      created_at: '	2021-12-26 20:30:08',
      display_name: 'Built-in Role',
      favicon: 'icon',
      url: 'https://www.google.com.tw/',
      password_type: 'plain',
      password_salt: '',
      default_avatar: 'icon',
      soft_deletion: false,
    },
    {
      name: 'role-built-in',
      created_at: '	2021-12-26 20:30:08',
      display_name: 'Built-in Role',
      favicon: 'icon',
      url: 'https://www.google.com.tw/',
      password_type: 'plain',
      password_salt: '',
      default_avatar: 'icon',
      soft_deletion: false,
    },
    {
      name: 'role-built-in',
      created_at: '	2021-12-26 20:30:08',
      display_name: 'Built-in Role',
      favicon: 'icon',
      url: 'https://www.google.com.tw/',
      password_type: 'plain',
      password_salt: '',
      default_avatar: 'icon',
      soft_deletion: false,
    },
    {
      name: 'role-built-in',
      created_at: '	2021-12-26 20:30:08',
      display_name: 'Built-in Role',
      favicon: 'icon',
      url: 'https://www.google.com.tw/',
      password_type: 'plain',
      password_salt: '',
      default_avatar: 'icon',
      soft_deletion: false,
    },
    {
      name: 'role-built-in',
      created_at: '	2021-12-26 20:30:08',
      display_name: 'Built-in Role',
      favicon: 'icon',
      url: 'https://www.google.com.tw/',
      password_type: 'plain',
      password_salt: '',
      default_avatar: 'icon',
      soft_deletion: false,
    },
    {
      name: 'role-built-in',
      created_at: '	2021-12-26 20:30:08',
      display_name: 'Built-in Role',
      favicon: 'icon',
      url: 'https://www.google.com.tw/',
      password_type: 'plain',
      password_salt: '',
      default_avatar: 'icon',
      soft_deletion: false,
    },
  ];
  texts: string[] = [];
  results: string[];

  constructor(
    private _location: Location,
    private route: ActivatedRoute,
  ) {
    this.route.params.subscribe(params => {
      if (params['id']) {
        this.id = params['id'];
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
    this.results = ["aaa", "bbb", "ccc"];
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
    console.log('已點擊');
  }

}
