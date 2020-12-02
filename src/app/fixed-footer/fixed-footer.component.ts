import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fixed-footer',
  templateUrl: './fixed-footer.component.html',
  styleUrls: ['./fixed-footer.component.scss','./../app.component.scss'],
})
export class FixedFooterComponent implements OnInit {

  constructor() { }

  ngOnInit() {}
  is_act:boolean=false;

}
