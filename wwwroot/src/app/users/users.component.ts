import { Component, OnInit } from '@angular/core';

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

    constructor(private randomUserApiService: RandomUserApiService) {}

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
        }
        else {
            this.searchedUsers = this.users;
        }

        this.isLoading = false;
    }
}