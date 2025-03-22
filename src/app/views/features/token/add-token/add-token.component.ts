import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-token',
  templateUrl: './add-token.component.html',
  styleUrls: ['./add-token.component.scss']
})
export class AddTokenComponent implements OnInit {

  id!: string;

  constructor(
    private _location: Location,
    private route: ActivatedRoute
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
