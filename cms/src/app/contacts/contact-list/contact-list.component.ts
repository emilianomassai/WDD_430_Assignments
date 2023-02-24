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

  contacts: Contact[] = []


  private subscription!: Subscription;


  constructor(private contactService: ContactService) {

  }

  ngOnInit(): void {
    this.contacts = this.contactService.getContacts();
    this.subscription = this.contactService.contactListChangedEvent
      .subscribe((contacts: Contact[]) => {
        this.contacts = contacts;
      });
  }


  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}