import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import { Project } from '../models';

@Injectable()
export class ProjectService {

    private projectsUrl = environment.apiEndpoint + '/project';


    constructor(private http: HttpClient) { }

    getProjects(): Observable<Project[]> {
        var result = this.http
            .get<Project[]>(this.projectsUrl)
            .pipe(map(data => {
                data.forEach(proj => {
                    proj.from = new Date(proj.from);
                    if(proj.to) proj.to = new Date(proj.to);
                })
                return data;
            }), catchError(this.handleError));

        return result;
    }

    getProject(id: string): Observable<Project> {
        const url = `${this.projectsUrl}/${id}`;
        return this.http.
            get<Project>(url)
            .pipe(map(data => {
                data.from = new Date(data.from);
                if(data.to) data.to = new Date(data.to);
                return data
            }), catchError(this.handleError));
    }

    private handleError(res: HttpErrorResponse | any) {
        console.error(res.error || res.body.error);
        return observableThrowError(res.error || 'Server error');
    }
}