import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { IRandomUsersResponse } from '../../shared/interfaces';

import { Observable } from 'rxjs/Observable';
import { Observer } from 'rxjs/Observer';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class RandomUserApiService {

    constructor(private _http: Http) { }

    getRandomUser() {
        return this._http
            .get('http://api.randomuser.me/')
            .map(response => {
                return response.json() as IRandomUsersResponse;
            });
    }

    getRandomUsers(userCount: number) {
        return this._http
            .get('https://api.randomuser.me?results=' + userCount.toString())
            .map(response => {
                return response.json() as IRandomUsersResponse;
            });
    }
}