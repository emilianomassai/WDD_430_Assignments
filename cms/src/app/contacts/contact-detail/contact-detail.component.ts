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

  constructor(private contactService: ContactService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(
      (params: Params) => {

        this.contact = this.contactService.getContact(params['id']);
      }
    )
  }

  onDelete() {
    this.contactService.deleteContact(this.contact);

    this.router.navigateByUrl('/contacts');
  }

}