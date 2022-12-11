import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { Personal, Project } from '../models';

@Injectable()
export class PersonalService {

    private projectsUrl = environment.apiEndpoint + '/personal';


    constructor(private http: HttpClient) { }

    getPersonal(): Personal {
        return { name: "Lorenz", age: this.durationYears(new Date(), new Date('09/1/1994')), image: "./profile" };
    }

    durationYears(date1: Date, date2: Date) {

        const msInDay = 24 * 60 * 60 * 1000;

        var res = Math.round(Math.abs(Number(date1) - Number(date2)) / msInDay);

        return Math.floor(res / 365);
    }
}