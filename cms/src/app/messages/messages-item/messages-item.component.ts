import { Component, Input, OnInit } from '@angular/core';
import { Messages } from '../messages.model';

@Component({
  selector: 'app-messages-item',
  templateUrl: './messages-item.component.html',
  styleUrls: ['./messages-item.component.css']
})
export class MessagesItemComponent implements OnInit {
  @Input() message!: Messages;

  constructor() { }


  ngOnInit() {
  }

}
