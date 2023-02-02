import { Injectable } from '@angular/core';
import { Messages } from './messages.model';
import { MOCKMESSAGES } from './MOCKMESSAGES';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  private messages: Messages[] = [];

  constructor() {
    this.messages = MOCKMESSAGES;
  }

  getMessages(): Messages[] { return this.messages.slice(); }



  getMessage(id: string): Messages {
    for (const message of this.messages) {
      if (message.id == id) {
        return message;
      }
    }
    return null!;
  }

}
