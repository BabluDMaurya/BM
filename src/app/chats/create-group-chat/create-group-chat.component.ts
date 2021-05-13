import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-create-group-chat',
  templateUrl: './create-group-chat.component.html',
  styleUrls: ['./create-group-chat.component.scss'],
})
export class CreateGroupChatComponent implements OnInit {
  @Input() chatType;
  @Input() room;
  @Input() receiverId;
  constructor() { }

  ngOnInit() {}

}
