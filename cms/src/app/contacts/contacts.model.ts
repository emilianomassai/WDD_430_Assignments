export class Contact {

  //id—the id of the contact.
  public id: string;

  // name—the name of the contact.
  public name: string;

  // email—the email address of the contact.
  public email: string;

  // phone—the phone number of the contact.
  public phone: string;

  // imageUrl—the URL of the photo image of the contact.
  public imageUrl: string;

  // group—this attribute is only applicable to group contacts. It is an array of other contacts that belong to the group.
  public group: Contact[];

  constructor(id: string, name: string, email: string, phone: string, imageUrl: string, group: Contact[]) {
    this.name = name;
    this.id = id;
    this.email = email;
    this.phone = phone;
    this.imageUrl = imageUrl;
    this.group = group;
  }
}