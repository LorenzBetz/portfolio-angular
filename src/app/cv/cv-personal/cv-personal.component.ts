import { Component, OnInit, Input } from '@angular/core';
import { Cv, Personal, Project } from '../../domain';

@Component({
  selector: 'app-cv-personal',
  templateUrl: './cv-personal.component.html',
  styleUrls: ['./cv-personal.component.scss']
})
export class CvPersonalComponent implements OnInit {
  public isMenuCollapsed = true;

  @Input() personal!: Personal;

  constructor() { }

  ngOnInit(): void {
  }

}
