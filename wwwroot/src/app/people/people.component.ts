import { Component, OnInit } from '@angular/core';

import { IPerson } from '../shared/interfaces';
import { PeopleApiService } from '../core/services/people.service';

@Component({
    selector: 'people',
    templateUrl: './people.component.html',
    styleUrls: ['./people.component.scss']
})
export class PeopleComponent implements OnInit {

    people: IPerson[] = [];

    constructor(private peopleApiService: PeopleApiService) {}

    ngOnInit() {

        this.peopleApiService.getPeople()
            .subscribe((people: IPerson[]) => {
                this.people = people;
            });
    }
}