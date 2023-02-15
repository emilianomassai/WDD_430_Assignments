import { Component, OnDestroy, OnInit } from '@angular/core';
import { Contact } from '../contacts.model';
import { ContactService } from '../contact.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit, OnDestroy {
  // @Output() contactWasSelected = new EventEmitter<Contact>();
  // @Output() selectedContactEvent = new EventEmitter<Contact>();

  contacts: Contact[] = [
    // new Contact('1', 'R. Kent Jackson', 'jacksonk@byui.edu', '208-496-3771', '../../assets/images/jacksonk.jpg', []),
    // new Contact('2', 'Rex Barzee', 'barzeer@byui.edu', '208-496-3768', '../../assets/images/barzeer.jpg', [])
  ];

  private subscription!: Subscription;

  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();


    this.subscription = this.contactService.contactListChangedEvent.subscribe(
      (contactList: Contact[]) => {
        this.contacts = contactList;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }


  // TO CHANGE THIS WITH REAL DATA
  // this function is add a new contact using hard coded details
  onAdd() {
    // fake add contact 
    let testContact = new Contact(this.contactService.getMaxId().toString(), 'Fred Flintstone', 'fredflintstone@byui.edu', '208-496-3771', '../../assets/images/fredFlintstone.png', [])
    this.contactService.addContact(testContact);
  }

}