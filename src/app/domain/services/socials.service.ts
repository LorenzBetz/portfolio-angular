import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { Personal, Project } from '../models';

@Injectable()
export class SocialsService {

    private socialsUrl = environment.apiEndpoint + '/socials';


    constructor(private http: HttpClient) { }

    getSocials(): Observable<Map<string,string>> {
        var result = this.http
            .get<Map<string,string>>(this.socialsUrl)
            .pipe(map(data => {
                return data;
            }), catchError(this.handleError));

        return result;
    }

    private handleError(res: HttpErrorResponse | any) {
        console.error(res.error || res.body.error);
        return observableThrowError(res.error || 'Server error');
    }
}