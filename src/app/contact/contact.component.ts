import { Component, OnInit } from '@angular/core';
import { SocialsService } from '../domain/services/socials.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {

  public insta: string = "";
  public xing: string = "";
  public linkedIn: string = "";
  public gitHub: string = "";

  constructor(private socialService: SocialsService) { }

  ngOnInit(): void {
    

    this.socialService.getSocials()
        .subscribe(socials => {
          var resMap = new Map(Object.entries(socials));
          this.insta = resMap.get("Instagram") ?? "";
          this.linkedIn = resMap.get("LinkedIn") ?? "";
          this.gitHub = resMap.get("GitHub") ?? "";
          this.xing = resMap.get("Xing")?? "";
        });
    

  }

}
