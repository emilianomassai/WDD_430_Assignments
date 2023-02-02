import { Component, Input, OnInit } from '@angular/core';
import { Messages } from '../messages.model';
import { ContactService } from 'src/app/contacts/contact.service';
import { Contact } from 'src/app/contacts/contacts.model';

@Component({
  selector: 'app-messages-item',
  templateUrl: './messages-item.component.html',
  styleUrls: ['./messages-item.component.css']
})

// export class MessagesItemComponent implements OnInit {
//   @Input() message!: Messages;
//   messageSender!: string;
//   constructor(private contactService: ContactService) { }
//   ngOnInit() {
//     const contact: Contact = this.contactService.getContact(this.message.sender);
//     this.messageSender = contact.name;
//   }
// }

export class MessagesItemComponent implements OnInit {
  @Input() message!: Messages;

  constructor() { }


  ngOnInit() {
  }

}
