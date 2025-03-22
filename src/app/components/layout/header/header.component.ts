import { Router } from '@angular/router';
import { Component, OnInit, HostListener } from '@angular/core';
import { ConfirmationService, MenuItem } from 'primeng/api';
import { menu, overlay, translateMenu } from 'src/app/shared/data/menu/menu';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: [ './header.component.scss' ]
})
export class HeaderComponent implements OnInit {

  accountName: any = '測試';

  memberMenuItem: MenuItem[] = [];
  menu: MenuItem[] = [];
  translateMenuItem: MenuItem[] = [];
  overlayMenuItem : MenuItem[] = [];

  scrWidth: any;

  @HostListener('window:resize', [ '$event' ])
  getScreenSize() {
    this.scrWidth = window.innerWidth;
    let width = 330;
    for (var i = 0; i <= 15; i++) {
      if (this.scrWidth > width) {
        menu[ i ].visible = true;
        overlay[ i ].visible = false;
      } else {
        menu[ i ].visible = false;
        overlay[ i ].visible = true;
      }
      width += 85;
    }
  }

  constructor(
    private confirmationService: ConfirmationService,
    private _router: Router,
  ) {

  }

  ngOnInit(): void {
    this.getScreenSize()
    this.menu = menu
    this.memberMenuItem = [
      {
        label: '個人資料',
        // routerLink: ['/main/account-info'],
        routerLinkActiveOptions: {
          exact: true
        },
        icon: 'pi pi-fw pi-user-edit'
      },
      {
        label: '登出',
        icon: 'pi pi-fw pi-sign-out',
        command: () => this.confirm()
      },
    ];
    this.translateMenuItem = translateMenu
    this.overlayMenuItem = overlay
  }

  logout() {
    this._router.navigate([ '/login' ]);
  }

  // 登出確認
  confirm() {
    this.confirmationService.confirm({
      message: `確定要登出嗎?`,
      header: '登出確認',
      accept: () => {
        //Actual logic to perform a confirmation
        this.logout();
      }
    });
  }

}
