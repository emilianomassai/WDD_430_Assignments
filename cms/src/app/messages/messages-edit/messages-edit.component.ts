import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { Messages } from '../messages.model';
import { MessageService } from '../message.service';

@Component({
  selector: 'app-messages-edit',
  templateUrl: './messages-edit.component.html',
  styleUrls: ['./messages-edit.component.css']
})
export class MessagesEditComponent implements OnInit {

  // I added my name in the mockcontacts.ts so I can use the id required from the new message system to display my name when sending a new message
  currentSender: string = '84';


  @ViewChild('idInput') idInputRef!: ElementRef;
  @ViewChild('subjectInput') subjectInputRef!: ElementRef;
  @ViewChild('messageInput') messageInputRef!: ElementRef;
  @ViewChild('senderInput') senderInputRef!: ElementRef;
  @Output() addMessageEvent = new EventEmitter<Messages>();

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  onSendMessage() {
    // const ingID = this.idInputRef.nativeElement.value;
    const ingSubject = this.subjectInputRef.nativeElement.value;
    const ingMessage = this.messageInputRef.nativeElement.value;
    // const ingSender = this.senderInputRef.nativeElement.value;

    const newMessage = new Messages('1', ingSubject, ingMessage,
      this.currentSender);

    // this.addMessageEvent.emit(newMessage);

    this.messageService.addMessage(newMessage);

  }

  onClear() {
    this.subjectInputRef.nativeElement.value = '';
    this.messageInputRef.nativeElement.value = '';


  }
}