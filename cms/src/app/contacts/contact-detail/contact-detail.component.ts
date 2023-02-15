import { Component, Input, OnInit } from '@angular/core';
import { Contact } from '../contacts.model';
import { ContactService } from '../contact.service';
import { ActivatedRoute, Params, Router } from '@angular/router';


@Component({
  selector: 'app-contact-detail',
  templateUrl: './contact-detail.component.html',
  styleUrls: ['./contact-detail.component.css']
})
export class ContactDetailComponent implements OnInit {
  contact!: Contact;
  id!: string;

  constructor(
    private contactService: ContactService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe(
      (params: Params) => {
        this.id = params['id'];
        this.contact = this.contactService.getContact(this.id);
      })
  }


  onDelete() {
    this.contactService.deleteContact(this.contact);
    this.router.navigate(['/contacts'], { relativeTo: this.route });
  }


  // TO CHANGE THIS WITH REAL DATA
  // this function is updating the existing contact with hard coded contact details
  onEdit() {

    // fake updated contact 
    let testContact = new Contact('1', 'Fred Flintstone', 'fredflintstone@byui.edu', '208-496-3771', '../../assets/images/fredFlintstone.png', [])

    this.contactService.updateContact(this.contact, testContact);
    this.router.navigate(['/contacts'], { relativeTo: this.route });

  }

}
