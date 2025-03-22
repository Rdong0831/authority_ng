import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RolesRoutingModule } from './roles-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { RolesAddComponent } from './roles-add/roles-add.component';
import { AddRolesComponent } from './add-roles/add-roles.component';

@NgModule({
  declarations: [
  
    RolesAddComponent,
       AddRolesComponent
  ],
  imports: [
    CommonModule,
    RolesRoutingModule,
    SharedModule
  ]
})
export class RolesModule { }
