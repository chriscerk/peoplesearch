import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IPerson } from '../../shared/interfaces.ts';
import 'rxjs/Rx';

@Injectable()
export class PeopleApiService {

    people: IPerson[];

    constructor(private _http: Http) { }

    getPeople() {
        return this._http.get('/api/people')
            .map((response) => {
                return <IPerson[]>response.json();
            });
    }

    getPersonById(id: string) {
        return this._http.get('/api/people/' + id)
            .map((response) => {
                return <IPerson>response.json();
            });
    }
}
