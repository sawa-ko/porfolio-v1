import { Component, OnInit } from '@angular/core';
import { animations } from 'ack-angular-fx';

@Component({
  animations: animations,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.less'],
})
export class AboutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
