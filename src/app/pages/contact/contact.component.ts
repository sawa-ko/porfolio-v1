import { Component, OnInit } from '@angular/core';
import { animations } from 'ack-angular-fx';

@Component({
  animations: animations,
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.less'],
})
export class ContactComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
