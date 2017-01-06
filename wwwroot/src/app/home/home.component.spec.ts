import {
    inject,
    TestBed
} from '@angular/core/testing';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
    beforeEach(() => TestBed.configureTestingModule({
        providers: [
            HomeComponent
        ]
    }));

    it('should have message', inject([HomeComponent], (home: HomeComponent) => {
        expect(home.message).toEqual('ASP.NET MVC Application for 2017 Health Catalyst Interview Process');
    }));

    it('should have page title', inject([HomeComponent], (home: HomeComponent) => {
        expect(home.pageTitle).toEqual('People Search');
    }));

    it('should have Github Link', inject([HomeComponent], (home: HomeComponent) => {
        expect(home.githubLink).toEqual('https://github.com/chriscerk/peoplesearch');
    }));
});
