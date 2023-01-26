import { Component } from '@angular/core';

import { Messages } from '../messages.model';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css']
})
export class MessagesListComponent {
  messages: Messages[] = [
    new Messages('1830', 'Test message', 'This is a test message.', 'Emiliano'),
    new Messages('1831', 'Replay test message', 'This is the replay to the test message.', 'Michael')
  ];

  onMessageAdded(message: Messages) {
    this.messages.push(message);
  }
}