import { Component, OnInit } from '@angular/core';
 

@Component({
  selector: 'app-date-test',
  templateUrl: './date-test.page.html',
  styleUrls: ['./date-test.page.scss'],
})
export class DateTestPage implements OnInit {
  term = '';
  filterData = [
    {
      firstName: 'Celestine',
      lastName: 'Schimmel',
      address: '7687 Jadon Port'
    },
    {
      firstName: 'Johan',
      lastName: 'Ziemann PhD',
      address: '156 Streich Ports'
    },
    {
      firstName: 'Lizzie',
      lastName: 'Schumm',
      address: '5203 Jordon Center'
    },
    {
      firstName: 'Gavin',
      lastName: 'Leannon',
      address: '91057 Davion Club'
    },
    {
      firstName: 'Lucious',
      lastName: 'Leuschke',
      address: '16288 Reichel Harbor'
    }
  ]
  constructor() {  }
  ngOnInit() {}  
}
