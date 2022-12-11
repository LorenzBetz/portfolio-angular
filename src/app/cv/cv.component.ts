import { Component, OnInit } from '@angular/core';
import { Cv, Personal, Project } from '../domain';
import { PersonalService } from '../domain/services/personal.service';
import { ProjectService } from '../domain/services/project.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  projects!: Project[];
  personal!: Personal;

  constructor(private projectService: ProjectService, private personalService: PersonalService) {
  }

  ngOnInit(): void {

    this.personal = this.personalService.getPersonal();
  }
}
