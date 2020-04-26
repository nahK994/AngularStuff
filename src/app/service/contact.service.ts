import { Injectable } from '@angular/core';
import { Contact } from '../model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  _contactList: Contact[] = [];

  constructor() { }

  addContact(contact: Contact)
  {
    this._contactList.push(contact);
  }
}
