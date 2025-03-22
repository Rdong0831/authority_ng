import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-syncers',
  templateUrl: './syncers.component.html',
  styleUrls: ['./syncers.component.scss']
})
export class SyncersComponent implements OnInit {

  constructor() { }

  syncers = [
    {
      name: 'syncer_casbin',
      organization:'built-in',
      created_at: '	2021-12-17 15:58:56	',
      type: 'Database',
      host:'localhost',
      port:'3306',
      user:'root',
      password:'123',
      database_type:'mysql',
      database:'syncer_db',
      table:'user_table',
      sync_interval:'1',
      is_enabled: false,
    }
  ];

  ngOnInit(): void {
  }

}
