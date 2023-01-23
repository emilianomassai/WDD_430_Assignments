import { Component, Input } from '@angular/core';
// import { Contact } from '../contact-detail/contacts-detail.model';
import { Contact } from '../contacts.model';


@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent {
@Input() contact!: Contact;

  contacts: Contact[] =[
    new Contact(1, 'R. Kent Jackson', 'jacksonk@byui.edu', '208-496-3771', '../../assets/images/jacksonk.jpg', []),
  ];
  // contacts: Contact[] =[
  //   new Contact('1', 'R. Kent Jackson', 'jacksonk@byui.edu', '208-496-3771', '../../assets/images/jacksonk.jpg', 'null'),
  // ];
}
