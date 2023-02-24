import { EventEmitter, Injectable } from '@angular/core';
import { MOCKCONTACTS } from './MOCKCONTACTS';
import { Contact } from './contacts.model';
import { Subject } from 'rxjs';
@Injectable()
export class ContactService {
  contactChangedEvent = new EventEmitter<Contact[]>();

  contactListChangedEvent = new Subject<Contact[]>();

  maxContactId: number;

  contacts: Contact[];

  constructor() {
    this.contacts = MOCKCONTACTS;
    this.maxContactId = this.getMaxId();
  }

  getContacts(): Contact[] {
    return this.contacts.slice();
  }

  getContact(id: string): Contact {
    for (const contact of this.contacts) {
      if (contact.id == id) {
        return contact;
      }
    }
    return null!;
  }


  getMaxId(): number {
    let maxId = 0;
    for (const contact of this.contacts) {
      const currentId = +contact.id;
      if (currentId > maxId) {
        maxId = currentId;
      }
    }
    return maxId;
  }

  addContact(newContact: Contact) {
    if (newContact === null || newContact === undefined) {
      return;
    }

    //if contact exists..
    //increment id number and assign to new contact (as string)
    this.maxContactId++;
    newContact.id = this.maxContactId.toString();
    //push unto list
    this.contacts.push(newContact);
    //create copy of list and emit/signal a change passing the copy
    const contactListClone = this.contacts.slice();
    this.contactListChangedEvent.next(contactListClone);
  }

  //method to update/replace an existing contact
  updateContact(originalContact: Contact, newContact: Contact) {
    //check if contact exists...
    if (originalContact === null || originalContact === undefined || newContact === null || newContact === undefined) {
      //if not, exit function
      return;
    }

    //find position/index of original cntact
    const pos = this.contacts.indexOf(originalContact);
    //if the position is less than 0 (meaning it is not in the list)...
    if (pos < 0) {
      //exit
      return;
    }

    //set the id of new contact to be tht of the original
    newContact.id = originalContact.id;
    //set the contact in the list to be the new contact
    this.contacts[pos] = newContact;
    //create copy
    const contactListClone = this.contacts.slice();
    //emit/signal a change passing the copy
    this.contactListChangedEvent.next(contactListClone);
  }

  //method to delete a contact
  deleteContact(contact: Contact) {
    //check if an existent document was passed
    if (contact === null || contact === undefined) {
      return;
    }
    //get position of document on list
    const pos = this.contacts.indexOf(contact);

    //if there is no document (index less than 0), exit. 
    if (pos < 0) {
      return;
    }
    //removed document at specified position
    this.contacts.splice(pos, 1);
    //emit event to signal that a change has been made, and pass it a new copy of the document list
    this.contactListChangedEvent.next(this.contacts.slice());
  }
}