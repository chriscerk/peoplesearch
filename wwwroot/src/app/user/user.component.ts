import { Component, Input } from '@angular/core';

import { IUser } from '../shared/interfaces';
import { RandomUserApiService } from '../core/services/randomUser.service';

@Component({
    selector: 'user',
    templateUrl: './user.component.html',
    styleUrls: ['./user.component.scss']
})
export class UserComponent {
    @Input() user: IUser;
    @Input() format: string;

    constructor(private userService: RandomUserApiService) { }

    ngOnInit() {
        
    }
}