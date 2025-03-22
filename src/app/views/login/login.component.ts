import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ConfirmationService, MessageService, MenuItem } from 'primeng/api';
import { translateMenu } from 'src/app/shared/data/menu/menu';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: [ './login.component.scss' ]
})
export class LoginComponent implements OnInit {

  loginForm: UntypedFormGroup;

  checked: boolean = false;
  webCaptcha: boolean;

  translateMenuItem: MenuItem[] = [];

  constructor(
    private fb: UntypedFormBuilder,
    private router: Router,
    private messageService: MessageService,
    private confirmationServ: ConfirmationService,
  ) {
    this.loginForm = this.fb.group({
      account: [ '', [ Validators.required ] ],
      password: [ '', [ Validators.required ] ],
      captcha: [ '', [ Validators.required ] ]
    })
  }

  ngOnInit(): void {
    this.translateMenuItem = translateMenu
  }

  submit() {
    this.router.navigate([ '/main' ]);
    // if (this.loginForm.valid) {
    //   this.router.navigate([ '/main' ]);
    // } else {
    //   this.loginForm.markAllAsTouched();
    // }
  }

  forgetPassword() {

  }

  changeLoginBtn(e: any) {
    if (e.index == 2) {
      this.webCaptcha = true;
    } else {
      this.webCaptcha = false;
    }
  }
}
