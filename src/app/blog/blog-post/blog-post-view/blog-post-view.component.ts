import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { GetPostQuery, Post } from 'graphql/generated';
import { Observable } from 'rxjs';
import { BaseComponent } from 'src/app/domain/base.component';

@Component({
  selector: 'app-blog-post-view',
  templateUrl: './blog-post-view.component.html',
  styleUrls: ['./blog-post-view.component.scss']
})
export class BlogPostViewComponent {

  @Input() toggleEdit: () => void;
  @Input() post?: Post;


  constructor(
    private router: Router,
    private auth: OidcSecurityService
  ) { }

  onBackButtonClick() {
    const link = ['/blog'];
    this.router.navigate(link);
  }

  isAuthenticated() {
    return this.auth.isAuthenticated();
  }
}