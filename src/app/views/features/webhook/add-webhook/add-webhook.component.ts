import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-webhook',
  templateUrl: './add-webhook.component.html',
  styleUrls: ['./add-webhook.component.scss']
})
export class AddWebhookComponent implements OnInit {

  organization = [
    { name: 'built-in' },
    { name: 'casbin' },
    { name: 'gsoc' },
  ];

  id!: string;

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
