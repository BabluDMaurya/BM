import { Component, AfterViewInit, Input, ViewChild, ElementRef, Renderer2, OnInit } from '@angular/core';

@Component({
  selector: 'app-expandable',
  templateUrl: './expandable.component.html',
  styleUrls: ['./../../app.component.scss', './expandable.component.scss'],
})
export class ExpandableComponent implements OnInit {
  @ViewChild("expandWrapper", { read: ElementRef, static: true }) expandWrapper: ElementRef;
  @Input("expanded") expanded: boolean = false;
  @Input("expandHeight") expandHeight: string = "150px";
  constructor(public renderer: Renderer2) { }

  ngOnInit() {
    console.log('dsfs');
    this.renderer.setStyle(this.expandWrapper.nativeElement, "max-height", this.expandHeight);
  }

}
