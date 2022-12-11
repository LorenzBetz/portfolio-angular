import { Component, OnInit } from '@angular/core';
import { TypeWriter } from './typewriter';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    var tw = new TypeWriter('typedtext',["i love linux", "i love oop", ""])
    tw.typewriter();
  }

}
