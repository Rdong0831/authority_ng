import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { refreshTokenIfTimeOver, setTime } from 'src/app/common/refresh-token';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(
    private authServ: AuthService,
    private router: Router,
  ) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

    // 身份跟path的menutype不同就返回首頁
    if (route.data['menuType']) {
      let status = route.data['menuType'];
      if (this.authServ.checkDidiTransferNumber() !== status) {
        this.router.navigate(['/main']);
        return false
      }
    }

    if (this.authServ.getToken()) {

      if (refreshTokenIfTimeOver(30)) {
        alert('已逾時!');
        this.authServ.logout();
        return false;
      }

      if (refreshTokenIfTimeOver()) {
        this.authServ.refreshToken(this.authServ.getRefreshToken() || '').subscribe(
          res => {
            if (res.code !== 200) {
              this.authServ.logout();
              return
            }
            setTime();
            this.authServ.saveToken(res.body.access_token);
          },
          err => {
            this.authServ.logout();
          },
        );
      }
      return true;
    }

    alert('您沒有權限!請登入後再試!!');
    this.router.navigate(['/']);
    return false;
  }

  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree | Observable<boolean | UrlTree> | Promise<boolean | UrlTree> {

    // 身份跟path的menutype不同就返回首頁
    if (childRoute.data['menuType']) {
      let status = childRoute.data['menuType'];
      if (this.authServ.checkDidiTransferNumber() !== status) {
        this.router.navigate(['/main']);
        return false
      }
    }
    return this.canActivate(childRoute, state);
  }

}
