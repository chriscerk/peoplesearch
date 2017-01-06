import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IPerson, IUser } from '../../shared/interfaces';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class PeopleApiService {

    constructor(private _http: Http) { }

    getPeople() {
        return this._http
            .get('/api/people')
            .map(response => {
                return response.json() as IPerson[];
            });
    }

    getPersonById(id: string) {
        return this._http
            .get('/api/people/' + id)
            .map(response => {
                return response.json() as IPerson;
            });
    }
}
