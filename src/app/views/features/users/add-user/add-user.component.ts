import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {

  organization = [
    { name: 'built-in' },
    { name: 'casbin' },
    { name: 'gsoc' },
  ];

  user_type = [
    { type: 'normal-user' },
  ];

  country_region = [
    { name: 'New York' },
    { name: 'Rome' },
    { name: 'London' },
    { name: 'Istanbul' },
    { name: 'Paris' }
  ];

  signup_application = [
    { name: 'app-casbin-oa' },
    { name: 'app-cert' },
    { name: 'cas-java-app' },
  ];

  id!: string;


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

}
