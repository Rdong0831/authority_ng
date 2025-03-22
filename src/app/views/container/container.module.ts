import { AddCertComponent } from './../features/certs/add-cert/add-cert.component';
import { AddSyncerComponent } from './../features/syncers/add-syncer/add-syncer.component';
import { PermissionsComponent } from './../features/permissions/permissions.component';
import { AddRolesComponent } from './../features/roles/add-roles/add-roles.component';
import { AddApplicationComponent } from './../features/applications/add-application/add-application.component';
import { AddWebhookComponent } from './../features/webhook/add-webhook/add-webhook.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ContainerRoutingModule } from './container-routing.module';
import { ContainerComponent } from './container.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { LayoutModule } from 'src/app/components/layout/layout.module';
import { UsersComponent } from '../features/users/users.component';
import { RolesComponent } from '../features/roles/roles.component';
import { ResourcesComponent } from '../features/resources/resources.component';
import { RecordsComponent } from '../features/records/records.component';
import { TokenComponent } from '../features/token/token.component';
import { WebhookComponent } from '../features/webhook/webhook.component';
import { ProvidersComponent } from '../features/providers/providers.component';
import { OrganizationsComponent } from '../features/organizations/organizations.component';
import { ApplicationsComponent } from '../features/applications/applications.component';
import { ProductsComponent } from '../features/products/products.component';
import { AddTokenComponent } from '../features/token/add-token/add-token.component';
import { AddProductComponent } from '../features/products/add-product/add-product.component';
import { AddPermissionsComponent } from '../features/permissions/add-permissions/add-permissions.component';
import { AddPaymentComponent } from '../features/payments/add-payment/add-payment.component';
@NgModule({
  declarations: [
    ContainerComponent,
    UsersComponent,
    RolesComponent,
    ResourcesComponent,
    RecordsComponent,
    TokenComponent,
    AddTokenComponent,
    WebhookComponent,
    AddWebhookComponent,
    ProvidersComponent,
    OrganizationsComponent,
    ApplicationsComponent,
    AddApplicationComponent,
    ProductsComponent,
    AddProductComponent,
    PermissionsComponent,
    AddPermissionsComponent,
    AddRolesComponent,
    AddSyncerComponent,
    AddCertComponent,
    AddPaymentComponent,
  ],
  imports: [
    CommonModule,
    ContainerRoutingModule,
    SharedModule,
    LayoutModule,
  ]
})
export class ContainerModule { }
