import { Component, HostListener } from '@angular/core';
import { animations } from 'ack-angular-fx';

@Component({
  animations: animations,
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less'],
})
export class AppComponent {}
