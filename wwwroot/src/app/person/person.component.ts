import { Component, Input } from '@angular/core';

import { IPerson } from '../shared/interfaces';
import { PeopleApiService } from '../core/services/people.service';

@Component({
    selector: 'person',
    templateUrl: './person.component.html',
    styleUrls: ['./person.component.scss']
})
export class PersonComponent {
    @Input() person: IPerson;
    @Input() format: string;

    constructor(private peopleApiService: PeopleApiService) { }

    ngOnInit() {
        if (this.person == null)
        {
            this.peopleApiService.getPersonById(this.person.id)
                .subscribe((p: IPerson) => {
                    this.person = p;
                });
        }
    }
}