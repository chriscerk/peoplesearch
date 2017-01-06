import { inject, TestBed, async } from '@angular/core/testing';
import { MockBackend, MockConnection } from '@angular/http/testing';
import { HttpModule, Http, XHRBackend, Response, ResponseOptions } from '@angular/http';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';

import { } from 'jasmine';

import { UsersComponent } from './users.component';
import { IRandomUsersResponse } from '../shared/interfaces';
import { RandomUserApiService } from '../core/services/randomUser.service';

const makeResponseData = () => [
    {
        "results": [
            {
                "gender": "female",
                "name": {
                    "title": "ms",
                    "first": "kelya",
                    "last": "david"
                },
                "location": {
                    "street": "8177 rue des abbesses",
                    "city": "grenoble",
                    "state": "lozère",
                    "postcode": 20381
                },
                "email": "kelya.david@example.com",
                "login": {
                    "username": "organicfish547",
                    "password": "green123",
                    "salt": "e1X5YdEU",
                    "md5": "397a9c102a947051aca2380a27a2d695",
                    "sha1": "57b7ee32481f39cd758f3e9b7f72942a1e5303a2",
                    "sha256": "3019ba4ec20da6508c34ed81c445fab95583e4190129a232be4ff386ca7a29bc"
                },
                "dob": "1949-01-13 15:03:52",
                "registered": "2006-01-28 02:53:54",
                "phone": "04-45-53-87-13",
                "cell": "06-78-80-82-97",
                "id": {
                    "name": "INSEE",
                    "value": "249045286986 16"
                },
                "picture": {
                    "large": "https://randomuser.me/api/portraits/women/55.jpg",
                    "medium": "https://randomuser.me/api/portraits/med/women/55.jpg",
                    "thumbnail": "https://randomuser.me/api/portraits/thumb/women/55.jpg"
                },
                "nat": "FR"
            }
        ],
        "info": {
            "seed": "c5a7308ffb46fd64",
            "results": 1,
            "page": 1,
            "version": "1.1"
        }
    }
] as IRandomUsersResponse[];

////////  Tests  /////////////
describe('RandomUserApiService (mockBackend)', () => {

    //beforeEach(async(() => {
    //    TestBed.configureTestingModule({
    //        imports: [HttpModule],
    //        providers: [
    //            RandomUserApiService,
    //            { provide: XHRBackend, useClass: MockBackend }
    //        ]
    //    })
    //        .compileComponents();
    //}));

    //it('can instantiate service when inject service',
    //    inject([RandomUserApiService], (service: RandomUserApiService) => {
    //        expect(service instanceof RandomUserApiService).toBe(true);
    //    }));



    //it('can instantiate service with "new"', inject([Http], (http: Http) => {
    //    expect(http).not.toBeNull('http should be provided');
    //    let service = new RandomUserApiService(http);
    //    expect(service instanceof RandomUserApiService).toBe(true, 'new service should be ok');
    //}));


    //it('can provide the mockBackend as XHRBackend',
    //    inject([XHRBackend], (backend: MockBackend) => {
    //        expect(backend).not.toBeNull('backend should be provided');
    //    }));

    //describe('when getRandomUsers(1)', () => {
    //    let backend: MockBackend;
    //    let service: RandomUserApiService;
    //    let fakeUserResponse: IRandomUsersResponse;
    //    let response: Response;

    //    beforeEach(inject([Http, XHRBackend], (http: Http, be: MockBackend) => {
    //        backend = be;
    //        service = new RandomUserApiService(http);
    //        fakeUserResponse = makeResponseData()[0];
    //        let options = new ResponseOptions({ status: 200, body: { data: fakeUserResponse } });
    //        response = new Response(options);
    //    }));

    //    it('should have expected 1 fake users (then)', async(inject([], () => {
    //        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

    //        service.getRandomUsers(1).toPromise()
    //            // .then(() => Promise.reject('deliberate'))
    //            .then(response => {
    //                expect(response.results.length).toBe(1,
    //                    'should have expected no. of users');
    //            });
    //    })));

    //    it('should have expected 1 fake users (Observable.do)', async(inject([], () => {
    //        backend.connections.subscribe((c: MockConnection) => c.mockRespond(response));

    //        service.getRandomUsers(1)
    //            .do(r => {
    //                expect(r.results.length).toBe(1,
    //                    'should have expected 1 of users');
    //            })
    //            .toPromise();
    //    })));

    //});
});
