import { Component, OnInit } from '@angular/core';
import { Cv, Personal, Project } from '../domain';
import { ProjectService } from '../domain/services/project.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  cv!: Cv;

  constructor(private projectService: ProjectService) {
  }

  ngOnInit(): void {
    this.cv = this.projectService.getProjects();
  }
}
