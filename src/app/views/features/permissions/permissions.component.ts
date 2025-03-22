import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-permissions',
  templateUrl: './permissions.component.html',
  styleUrls: ['./permissions.component.scss']
})
export class PermissionsComponent implements OnInit {

  permissions = [
    {
      name:'permission-built-in',
      organization: 'casbin',
      created_at: '2022-01-01 15:42:28',
      display_name: 'Built-in Permission',
      sub_users: ['built-in/Gabo-Dev','built-in/samuelzhang'],
      sub_roles: 'built-in/role-built-in',
      sub_domains: '',
      resource_type: 'Application',
      resources: 'app-built-in',
      actions: ['Read','Admin'],
      effect: 'Allow',
      is_enabled: true,
      submitter: '111',
      approver: '222',
      approve_time: '',
      state: 'Pending',
      action:'',
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
