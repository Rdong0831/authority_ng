import { Component } from '@angular/core';
import { ConfirmationService, MessageService } from 'primeng/api';
import { environment } from 'src/environments/environment';
import { versionInfo } from 'version-info';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [ConfirmationService, MessageService]

})
export class AppComponent {
  title = 'authority_ng';
  currentApplicationVersion = environment.apiVersion;

  versionInfo: any = versionInfo;

  // loading 狀態
  blocked = false;

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log(this.versionInfo);
    console.log('2023-01-10');
  }
}
