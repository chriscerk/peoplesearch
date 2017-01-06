import { Component } from '@angular/core';

@Component({
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent {
    pageTitle = "People Search";
    message = 'ASP.NET MVC Application for 2017 Health Catalyst Interview Process';
    githubLink = 'https://github.com/chriscerk/peoplesearch';
}
