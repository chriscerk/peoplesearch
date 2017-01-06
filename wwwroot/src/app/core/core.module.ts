import { NgModule, Optional, SkipSelf, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EnsureModuleLoadedOnceGuard } from '../shared/ensureModuleLoadedOnceGuard';
import { PeopleApiService } from './services/people.service';
import { RandomUserApiService } from './services/randomUser.service';

@NgModule({
    imports: [CommonModule],
    exports: [CommonModule],
    providers: [PeopleApiService, RandomUserApiService]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {

    constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
        super(parentModule);
    }

}