import { Component, OnInit, OnChanges, Input, ElementRef, ViewChild, ViewRef, SimpleChange, SimpleChanges } from '@angular/core';
import { Cv, Personal, Project } from '../../domain';
import { Router } from '@angular/router';
import { PositionService } from 'src/app/domain/services/position.service';
import { ProjectService } from 'src/app/domain/services/project.service';
import { lastValueFrom, max } from 'rxjs';

@Component({
  selector: 'app-cv-overview',
  templateUrl: './cv-overview.component.html',
  styleUrls: ['./cv-overview.component.scss']
})
export class CvOverviewComponent implements OnInit {

  projects?: Project[];

  constructor(private router: Router, private positionService: PositionService, private projectService: ProjectService) { }

  async ngOnInit(): Promise<void> {
    await this.projectService.getProjects()
      .subscribe(projects => {
        this.projects = projects;
      });
  }

  ngDoCheck(): void {
    this.setPositionOnLoad();
  }

  gotoDetail(project: Project): void {
    this.setPositionOnLeave();
    const link = ['/project', project.id];
    this.router.navigate(link);
  }

  setPositionOnLoad(): void {
    this.positionService.position.subscribe((p) => {
      var doc = document.getElementById('right');
      var doc_nav = document.getElementsByTagName('html')[0];
      if (doc) {
        doc.scrollTop = p;
      }
      if (doc_nav) {
        doc_nav.scrollTop = p;
      }
    });
  }

  setPositionOnLeave(): void {
    var desktop = document.getElementById('right')?.scrollTop ?? 0;
    var mobile = document.getElementsByTagName('html')[0]?.scrollTop ?? 0

    this.positionService.setPosition(Math.max(desktop,mobile))
  }
}