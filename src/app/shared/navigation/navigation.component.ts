import { Component, OnInit } from '@angular/core';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements OnInit {

  public isMenuCollapsed = true;
  
  constructor(private auth: OidcSecurityService) { }

  ngOnInit(): void {
  }

  isAuthenticated() {
    return this.auth.isAuthenticated();
  }
}
