import { Component, OnInit } from '@angular/core';
import {Accordion, AccordionGroup} from './accordion';

@Component({
  selector: 'app-leftmenu',
  templateUrl: './leftmenu.component.html',
  styleUrls: ['./leftmenu.component.css']
})
export class LeftmenuComponent implements OnInit {

  constructor() { }
  isGroupOpen = false;

  groups: Array<any> = [
      {
          heading: 'Medical Insurance',
          content: '<ul><li>home</li></ul>'
      },
      {
          heading: 'Medical',
          content: 'I’m a dynamic content)'
      },
      {
          heading: 'Patients Accounts',
          content: 'I’m a dynamic content) '
      },
      {
          heading: 'Stock/Purchases',
          content: 'I’m a dynamic content) '
      },
      {
          heading: 'Personnel Payroll',
          content: 'I’m a dynamic content) '
      },
      {
          heading: 'General Ledger',
          content: 'I’m a dynamic content) '
      },
      {
          heading: 'Setup',
          content: 'I’m a dynamic content) '
      },
      {
          heading: 'Medical Insurance',
          content: 'I’m a dynamic content) '
      }
  ];
  ngOnInit() {
  }

}
