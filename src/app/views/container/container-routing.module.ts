import { AddCertComponent } from './../features/certs/add-cert/add-cert.component';
import { AddSyncerComponent } from './../features/syncers/add-syncer/add-syncer.component';
import { AddUserComponent } from './../features/users/add-user/add-user.component';
import { CertsComponent } from './../features/certs/certs.component';
import { PaymentsComponent } from './../features/payments/payments.component';
import { AddApplicationComponent } from './../features/applications/add-application/add-application.component';
import { ApplicationsComponent } from './../features/applications/applications.component';
import { AddWebhookComponent } from './../features/webhook/add-webhook/add-webhook.component';
import { RecordsComponent } from './../features/records/records.component';
import { ResourcesComponent } from './../features/resources/resources.component';
import { UsersComponent } from './../features/users/users.component';
import { RolesComponent } from './../features/roles/roles.component';
import { WebhookComponent } from './../features/webhook/webhook.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './container.component';
import { TokenComponent } from '../features/token/token.component';
import { PermissionsComponent } from '../features/permissions/permissions.component';
import { OrganizationsComponent } from '../features/organizations/organizations.component';
import { AddOrganizationComponent } from '../features/organizations/add-organization/add-organization.component';
import { ProvidersComponent } from '../features/providers/providers.component';
import { AddRolesComponent } from '../features/roles/add-roles/add-roles.component';
import { ProductsComponent } from '../features/products/products.component';
import { AddTokenComponent } from '../features/token/add-token/add-token.component';
import { AddProductComponent } from '../features/products/add-product/add-product.component';
import { AddPermissionsComponent } from '../features/permissions/add-permissions/add-permissions.component';
import { SyncersComponent } from '../features/syncers/syncers.component';
import { AddPaymentComponent } from '../features/payments/add-payment/add-payment.component';
import { AddProviderComponent } from '../features/providers/add-provider/add-provider.component';
const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  {
    path: '',
    component: ContainerComponent,
    children: [
      { path: 'dashboard', loadChildren: () => import('../features/dashboard/dashboard.module').then(m => m.DashboardModule) },
      { path: 'applications', component: ApplicationsComponent },
      { path: 'applications/add-application', component: AddApplicationComponent },
      { path: 'applications/add-application/:id', component: AddApplicationComponent },
      { path: 'permissions', component: PermissionsComponent },
      { path: 'permissions/add-permissions', component: AddPermissionsComponent },
      { path: 'permissions/add-permissions/:id', component: AddPermissionsComponent },
      { path: 'organizations', component: OrganizationsComponent },
      { path: 'organizations/add-organization', component: AddOrganizationComponent },
      { path: 'organizations/add-organization/:id', component: AddOrganizationComponent },
      { path: 'users', component: UsersComponent },
      { path: 'certs', component: CertsComponent },
      { path: 'certs/add-cert', component: AddCertComponent },
      { path: 'certs/add-cert/:id', component: AddCertComponent },
      { path: 'users/add-user', component: AddUserComponent },
      { path: 'users/add-user/:id', component: AddUserComponent },
      { path: 'roles', component: RolesComponent },
      { path: 'roles/add-roles', component: AddRolesComponent },
      { path: 'roles/add-roles/:id', component: AddRolesComponent },
      { path: 'resources', component: ResourcesComponent },
      { path: 'providers', component: ProvidersComponent },
      { path: 'providers/add-provider', component: AddProviderComponent },
      { path: 'providers/add-provider/:id', component: AddProviderComponent },
      { path: 'records', component: RecordsComponent },
      { path: 'token', component: TokenComponent },
      { path: 'payments', component: PaymentsComponent },
      { path: 'payments/add-payment', component: AddPaymentComponent },
      { path: 'payments/add-payment/:id', component: AddPaymentComponent },
      { path: 'token/add-token', component: AddTokenComponent },
      { path: 'token/add-token/:id', component: AddTokenComponent },
      { path: 'webhook', component: WebhookComponent },
      { path: 'webhook/add-webhook', component: AddWebhookComponent },
      { path: 'webhook/add-webhook/:id', component: AddWebhookComponent },
      { path: 'products', component: ProductsComponent },
      { path: 'products/add-product', component: AddProductComponent },
      { path: 'products/add-product/:id', component: AddProductComponent },
      { path: 'syncers', component: SyncersComponent },
      { path: 'syncers/add-syncer', component: AddSyncerComponent },
      { path: 'syncers/add-syncer/:id', component: AddSyncerComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ContainerRoutingModule { }
