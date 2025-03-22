import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { FooterComponent } from './footer/footer.component';
import { FeedbackComponent } from './feedback/feedback.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    FeedbackComponent
  ],
  imports: [
    RouterModule,
    CommonModule,
    SharedModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    FeedbackComponent
  ]
})
export class LayoutModule { }
