import { NgModule } from '@angular/core';
import { UniversalModule } from 'angular2-universal';
import { Ng2BootstrapModule } from 'ng2-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { CoreModule }   from './core/core.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home';
import { AboutComponent } from './about';
import { PeopleComponent } from './people';
import { PersonComponent } from './person';
import { UsersComponent } from './users';
import { UserComponent } from './user';

import '../styles.scss';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        AboutComponent,
        PeopleComponent,
        PersonComponent,
        UsersComponent,
        UserComponent
    ],
    imports: [
        UniversalModule,
        Ng2BootstrapModule,
        AppRoutingModule,
        CoreModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
