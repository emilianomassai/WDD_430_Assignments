import { Component, OnDestroy, OnInit } from '@angular/core';
import { Contact } from '../contacts.model';
import { ContactService } from '../contact.service';
import { Subscription } from 'rxjs';


@Component({
  selector: 'cms-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit, OnDestroy {
  contacts: Contact[] = [];
  term!: string;
  private subscription!: Subscription;
  constructor(private contactService: ContactService) { }

  ngOnInit() {
    this.contacts = this.contactService.getContacts();

    this.subscription = this.contactService.contactChangedEvent.subscribe(
      (contacts: Contact[]) => {
        this.contacts = contacts;
      });
  }
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  search(value: string) {

    this.term = value;

  }

}