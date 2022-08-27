import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Cv, Personal, Project } from '../../domain';
import { ProjectService } from '../../domain/services/project.service';

@Component({
  selector: 'app-cv-details',
  templateUrl: './cv-details.component.html',
  styleUrls: ['./cv-details.component.scss']
})
export class CvDetailsComponent implements OnInit {
  navigated = false;
  project!:  Project;

  constructor(private route: ActivatedRoute, private projectService: ProjectService) { }

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        const id = +params['id'];
        this.navigated = true;
        this.project = this.projectService.getProject(id);
      } else {
        this.navigated = false;
      }
    });
  }

  onBackButtonClick(): void {
    window.history.back();
  }

}
