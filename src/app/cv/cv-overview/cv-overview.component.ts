import { Component, OnInit, Input } from '@angular/core';
import { Cv, Personal, Project } from '../../domain';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cv-overview',
  templateUrl: './cv-overview.component.html',
  styleUrls: ['./cv-overview.component.scss']
})
export class CvOverviewComponent implements OnInit {

  @Input() projects!: Project[];

  constructor(private router: Router,) { 
  }

  ngOnInit(): void {
  }

  gotoDetail(project: Project): void {
    const link = ['/project', 2];
    this.router.navigate(link);
  }
}

