import { EventEmitter, Injectable } from '@angular/core';
import { MOCKCONTACTS } from './MOCKCONTACTS';
import { Contact } from './contacts.model';
import { Subject } from 'rxjs';

@Injectable()
export class ContactService {
  private maxContactId!: number;

  contactListChangedEvent = new Subject<Contact[]>();
  contactSelectedEvent = new EventEmitter<Contact>();
  // contactChangedEvent = new EventEmitter<Contact[]>();

  private contacts: Contact[] = [];
  constructor() {
    this.contacts = MOCKCONTACTS;
  }

  getContacts(): Contact[] { return this.contacts.slice(); }

  getContact(id: string): Contact {
    for (const contact of this.contacts) {
      if (contact.id == id) {
        return contact;
      }
    }
    return null!;
  }


  getMaxId(): number {

    let maxId = 1
    let currentId = 0;
    for (const contact of this.contacts) {
      currentId == parseInt(contact.id);
      if (currentId > maxId) {
        maxId = currentId
      }
      console.log('getMaxId is working on Contacts')
    }
    return maxId
  }

  deleteContact(contact: Contact) {

    if (!contact) {
      return;
    }
    const pos = this.contacts.indexOf(contact);
    if (pos < 0) {
      return;
    }
    this.contacts.splice(pos, 1);
    this.contactListChangedEvent.next(this.contacts.slice());
    console.log('deleteContact is working');
  }

  addContact(newContact: Contact) {
    if (!newContact || newContact == null) {
      return;
    }
    this.maxContactId++;
    let newContactIdString = this.maxContactId;
    newContact.id = newContactIdString.toString();
    this.contacts.push(newContact);
    let contactsListClone = this.contacts.slice();
    this.contactListChangedEvent.next(contactsListClone.slice());
    console.log('addContact is working');
  }

  updateContact(originalContact: Contact, newContact: Contact) {

    if (!originalContact || !newContact || originalContact == null || newContact == null) {
      return;
    }

    let pos = this.contacts.indexOf(originalContact)
    if (pos < 0) {
      return
    }
    newContact.id = originalContact.id
    this.contacts[pos] = newContact
    let contactsListClone = this.contacts.slice()
    this.contactListChangedEvent.next(contactsListClone.slice())
    console.log('updateContact is working');
  }

}
