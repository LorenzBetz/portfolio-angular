import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';

@Component({
  selector: 'app-blog-overview-header',
  templateUrl: './blog-overview-header.component.html',
  styleUrls: ['./blog-overview-header.component.scss']
})
export class BlogOverviewHeaderComponent {

  constructor(
    private router: Router,
    private auth: OidcSecurityService
  ) { }

  addPost(): void {
    const link = ['/blog/new'];
    this.router.navigate(link);
  }

  isAuthenticated() {
    return this.auth.isAuthenticated();
  }
}
