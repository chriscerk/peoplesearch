# People Search

ASP.NET MVC Application for 2017 Health Catalyst Interview Process

## Requirements Met

### Business Requirements
1. Search input in a text box for any part of their first or last name. - **Complete**
2. Displays a pleasing style a list of people - **Table/Card view for "Users" and table cell/row highlighting**
3. Seed data from (such as http://api.randomuser.me/) or provide a way to enter new users or both - **"Users"** (See Difficulties) 
4. Slow search is handled gracefully by UI - **In "Users": Loading... & Warning after 5 sec search upon hitting 'Slow Search' button**

### Technical Requirements
1. An ASP.NET MVC Application - **Complete (Person Model, Angular 2 View, PeopleController)**
2. Use Ajax to respond to search request - **```cd peoplesearch/wwwroot/src/app/core/services``` ('@angular/http' uses Ajax)**
3. JavaScript unit tests - **Jasmine ```npm test```** (See Difficulties)

### Difficulties
1. Jasmine Testing & Angular 2 services: I had a lot of difficulty figuring out how to write tests with my Services and was unable to figure out how.
2. Could not figure out how to POST from my Angular 2 service.

## Steps:

### Prerequesites
1. [Latest .NET CLI](https://www.microsoft.com/net/core#windowscmd)
2. [Node](https://nodejs.org/en/)

### Installation
1. Open cmd
2. ```git clone https://github.com/chriscerk/peoplesearch ```
3. ```cd src/peoplesearch```
4. ```dotnet restore```
5. ```npm run build:vendor```
6. ```npm rebuild node-sass```

### Running the Application
1. ```set ASPNETCORE_ENVIRONMENT=Development```
2. ```npm start```
3. Open browser to localhost:3000

### Running the Tests
1. Open a new terminal
2. ```npm test```

## Note:
Base Project generated with https://github.com/sgbj/generator-aspnetcore-angular2