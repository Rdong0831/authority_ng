import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-organization',
  templateUrl: './add-organization.component.html',
  styleUrls: ['./add-organization.component.scss']
})
export class AddOrganizationComponent implements OnInit {


  password_type = [
    { name: 'plain' },
    { name: 'salt' },
    { name: 'md5-salt' },
    { name: 'bcrypt' },
    { name: 'pbkdf2-salt' },
    { name: 'argon2id' }
  ];

  default_application = [
    { name: 'app-casnode-gsoc' },
    { name: '' }
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
