import { Component, OnInit } from '@angular/core';
import { animations } from 'ack-angular-fx';

@Component({
  animations: animations,
  templateUrl: './programming-language.component.html',
  styleUrls: ['./programming-language.component.less'],
})
export class ProgrammingLanguageComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
