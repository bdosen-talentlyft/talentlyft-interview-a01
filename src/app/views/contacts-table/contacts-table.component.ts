import { Component, OnInit } from '@angular/core';
import { ContactModel } from 'src/app/models/contact.model';
import { ContactsService } from 'src/app/services/contacts.service';

@Component({
    selector: 'app-contacts-table',
    templateUrl: './contacts-table.component.html',
    styleUrls: ['./contacts-table.component.scss']
})
export class ContactsTableComponent implements OnInit {

    visibleColumns: string[] = ['id', 'firstName', 'lastName', 'email', 'address', 'phoneNumber', 'actions'];
    contacts: ContactModel[] = [];

    constructor(
        private readonly contactsService: ContactsService,
    ) { }

    async ngOnInit(): Promise<void> {
        const contactsPage = await this.contactsService.getContacts();
        this.contacts = contactsPage.data;
    }

}
