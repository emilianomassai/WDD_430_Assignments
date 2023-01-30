import { EventEmitter, Injectable } from '@angular/core';
import { MOCKCONTACTS } from './MOCKCONTACTS';
import { Contact } from './contacts.model';

@Injectable()
export class ContactService {
  contactSelectedEvent = new EventEmitter<Contact>();

  private contacts: Contact[] = [];
  constructor() {
    this.contacts = MOCKCONTACTS;
  }

  getContacts(): Contact[] { return this.contacts.slice(); }

  // TO FIX THIS 
  // getContact(id: string): Contact {

  //   // FOR each contact in the contacts list
  //   //  IF contact.id equals the id THEN
  //   //  RETURN contact 
  //   //   ENDIF
  //   //   ENDFOR
  //   //  RETURN null

  //   this.contacts.forEach(contact => {
  //     if (contact.id = id) {
  //       return contact;
  //     } else return null;
  //   });


  // }


}
