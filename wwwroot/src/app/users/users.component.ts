import { Component, OnInit, NgZone } from '@angular/core';
import { Observable, Subscription } from 'rxjs/Rx';

import { IUser, IRandomUsersResponse } from '../shared/interfaces';
import { RandomUserApiService } from '../core/services/randomUser.service';


@Component({
    selector: 'users-search',
    templateUrl: './users.component.html',
    styleUrls: ['./users.component.scss']
})
export class UsersComponent implements OnInit {

    users: IUser[] = [];
    searchedUsers: IUser[] = [];
    searchTerm: string;
    totalUsers = 5000;

    displayMode: string;
    tableIconColor: string;
    cardIconColor: string;

    isLoading: boolean;
    loadingExpired: boolean;
    ticks = 0;
    timer: Observable<number>;
    sub: Subscription = new Subscription;

    constructor(private randomUserApiService: RandomUserApiService, private zone: NgZone) { }

    ngOnInit() {
        this.randomUserApiService.getRandomUsers(this.totalUsers)
            .subscribe((response: IRandomUsersResponse) => {
                this.users = response.results;
            });

        this.displayToTable();
    }

    displayToTable() {
        this.displayMode = 'tableView';
        this.tableIconColor = 'orange';
        this.cardIconColor = 'black';
    }

    displayToCard() {
        this.displayMode = 'cardView';
        this.tableIconColor = 'black';
        this.cardIconColor = 'orange';
    }

    filterChanged() {
        this.isLoading = true;
        this.sub.unsubscribe();
        this.ticks = 0;
        this.filterResults();
    }

    monitorSearchTime() {
        this.ticks = 0;

        this.timer = Observable.timer(2000, 1000);
        this.sub = this.timer.subscribe(t => this.ticks = t);

        this.zone.run(() => {
            console.log('enabled time travel');
        });
    }

    emulateSlowSearch() {
        this.isLoading = true;
        this.monitorSearchTime();
    }

    filterResults() {
        if (this.searchTerm && this.users) {
            let props = ['first', 'last'];
            let filtered = this.users.filter(u => {
                let match = false;
                for (let prop of props) {
                    if (u.name[prop].toString().toLowerCase().indexOf(this.searchTerm.toLowerCase()) > -1) {
                        match = true;
                        break;
                    }
                };
                return match;
            });
            this.searchedUsers = filtered;
            this.isLoading = false;
        }
        else {
            this.searchedUsers = this.users;
            this.isLoading = false;
        }
    }
}