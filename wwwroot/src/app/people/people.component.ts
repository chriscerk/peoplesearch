import { Component, OnInit } from '@angular/core';

import { IPerson, IUser } from '../shared/interfaces';
import { PeopleApiService } from '../core/services/people.service';
import { RandomUserApiService } from '../core/services/randomUser.service';


@Component({
    selector: 'people-search',
    templateUrl: './people.component.html',
    styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

    people: IPerson[] = [];
    searchedPeople: IPerson[] = [];
    users: IUser[] = [];
    searchedUsers: IUser[] = [];

    addPerson: IPerson =
    {
        id: '',
        firstName: '',
        lastName: '',
        userName: '',
        phoneNumber: '',
        email: ''
    };

    searchTerm: string;
    displayMode: string;
    tableIconColor: string;
    cardIconColor: string;
    addBoxOpened: boolean;

    constructor(private peopleApiService: PeopleApiService, private randomUserApiService: RandomUserApiService) {}

    ngOnInit() {
        this.peopleApiService.getPeople()
            .subscribe((people: IPerson[]) => {
                this.people = this.searchedPeople = people;
            });

        this.addBoxOpened = false;
        this.displayToTable();
    }

    displayToTable() {
        this.displayMode = "tableView";
        this.tableIconColor = "orange";
        this.cardIconColor = "black";
    }

    displayAddBox() {
        this.addBoxOpened = true;
    }

    addThisPerson() {
        this.peopleApiService.createPerson(this.addPerson);
        this.addBoxOpened = false;
        this.resetAddPerson();
    }

    cancelAddPerson() {
        this.addBoxOpened = false;
        this.resetAddPerson();
    }

    resetAddPerson() {
        this.addPerson =
            {
                id: '',
                firstName: '',
                lastName: '',
                userName: '',
                phoneNumber: '',
                email: ''
            };
    }

    filterChanged() {
        if (this.searchTerm && this.people) {
            let props = ['firstName', 'lastName'];
            let filtered = this.people.filter(p => {
                let match = false;
                for (let prop of props) {
                    if (p[prop].toString().toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1) {
                        match = true;
                        break;
                    }
                };
                return match;
            });
            this.searchedPeople = filtered;
        }
        else {
            this.searchedPeople = this.people;
        }
    }
}