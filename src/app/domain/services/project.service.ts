import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

import { Cv, Personal, Project } from '../models';

@Injectable()
export class ProjectService {

    cv: Cv;

    constructor(private http: HttpClient) {
        let personal: Personal = { name: "Lorenz", age: this.durationYears(new Date(), new Date('09/28/1994')), image: "./profile" }
        let project1: Project = { projectname: "Ausbildung zum Fachinformatiker für Systemintegration", from: new Date('09/01/2015'), to: new Date('06/01/18'), description: "Ich bin eine Beschreibung.", tecstack: ["MSSQL Server", "Microsoft Administration", "Linux Administration"] }
        let project2: Project = { projectname: "Ausbildung zum Fachinformatiker für Systemintegration", from: new Date('09/01/2015'), to: new Date('06/01/18'), description: "Ich bin eine Beschreibung.", tecstack: ["MSSQL Server", "Microsoft Administration", "Linux Administration"] }
        let project3: Project = { projectname: "Ausbildung zum Fachinformatiker für Systemintegration", from: new Date('09/01/2015'), to: new Date('06/01/18'), description: "Ich bin eine Beschreibung.", tecstack: ["MSSQL Server", "Microsoft Administration", "Linux Administration"] }

        this.cv = {
            personal: personal,
            projects: [project1, project2, project3, project3, project3, project3, project3, project3, project3, project3, project3, project3, project3]

        }
    }

    durationYears(date1: Date, date2: Date) {

        const msInDay = 24 * 60 * 60 * 1000;

        var res = Math.round(Math.abs(Number(date1) - Number(date2)) / msInDay);

        return Math.floor(res / 365);
    }

    getProjects() {
        return this.cv;
    }

    getProject(id: number): Project {
        return this.cv.projects[id];
    }

    //   save(hero: Hero) {
    //     if (hero.id) {
    //       return this.put(hero);
    //     }
    //     return this.post(hero);
    //   }

    //   delete(hero: Hero) {
    //     const headers = new Headers();
    //     headers.append('Content-Type', 'application/json');

    //     const url = `${this.heroesUrl}/${hero.id}`;

    //     return this.http.delete<Hero>(url).pipe(catchError(this.handleError));
    //   }

    //   // Add new Hero
    //   private post(hero: Hero) {
    //     const headers = new Headers({
    //       'Content-Type': 'application/json'
    //     });

    //     return this.http
    //       .post<Hero>(this.heroesUrl, hero)
    //       .pipe(catchError(this.handleError));
    //   }

    //   // Update existing Hero
    //   private put(hero: Hero) {
    //     const headers = new Headers();
    //     headers.append('Content-Type', 'application/json');

    //     const url = `${this.heroesUrl}/${hero.id}`;

    //     return this.http.put<Hero>(url, hero).pipe(catchError(this.handleError));
    //   }

    private handleError(res: HttpErrorResponse | any) {
        console.error(res.error || res.body.error);
        return observableThrowError(res.error || 'Server error');
    }
}