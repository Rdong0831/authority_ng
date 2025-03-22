import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutModule } from './components/layout/layout.module';
import { SharedModule } from './shared/shared.module';
import { LoginComponent } from './views/login/login.component';
import { AddUserComponent } from './views/features/users/add-user/add-user.component';
import { SyncersComponent } from './views/features/syncers/syncers.component';
import { CertsComponent } from './views/features/certs/certs.component';
import { PaymentsComponent } from './views/features/payments/payments.component';
import { PaymentsRoutingModule } from './views/features/payments/payments-routing.module';
import { PaymentsModule } from './views/features/payments/payments.module';
import { AddProviderComponent } from './views/features/providers/add-provider/add-provider.component';
import { AddOrganizationComponent } from './views/features/organizations/add-organization/add-organization.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AddUserComponent,
    SyncersComponent,
    CertsComponent,
    PaymentsComponent,
    AddProviderComponent,
    AddOrganizationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    LayoutModule,
    PaymentsRoutingModule,
    PaymentsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
