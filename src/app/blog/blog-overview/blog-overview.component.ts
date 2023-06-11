import { Apollo, QueryRef, gql } from 'apollo-angular';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators'
import { Component, Input, OnDestroy, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { GetPostsGQL, GetPostsQuery } from 'graphql/generated';
import { PostService } from '../../domain/services/post.service';
import { ConfigService } from 'src/app/domain/services/config.service';
import { OidcSecurityService } from 'angular-auth-oidc-client';

const GET_POSTS = gql`
  query GetPosts($page: Int!, $size: Int!) {
    posts(page: $page, size: $size){
      id,
      title,
      created,
      author {
        id,
        accountId,
        name,
        pictureUrl
      }
    }
  }
`;

@Component({
  selector: 'app-blog-overview',
  templateUrl: './blog-overview.component.html',
  styleUrls: ['./blog-overview.component.scss']
})
export class BlogOverviewComponent implements OnInit, OnChanges {

  posts?: Observable<GetPostsQuery['posts']>
  currentPage: number;
  pageSize: number;

  constructor(
    private router: Router,
    private postsGQL: GetPostsGQL,
    private postService: PostService,
    private configService: ConfigService,
    private auth: OidcSecurityService
  ) { }


  ngOnInit(): void {
    this.currentPage = this.configService.currentBlogPage();
    this.pageSize = this.configService.getPageSize();
    this.fetchPosts();
  }

  ngOnChanges(
    changes: SimpleChanges): void {
    this.fetchPosts();
  }

  fetchPosts() {
    this.posts = this.postsGQL.fetch({
      page: this.currentPage,
      size: this.pageSize,
    }, {
      fetchPolicy: 'network-only', // Doesn't check cache before making a network request
    }).pipe(map(result => result.data.posts))
  }

  gotoDetail(id: any): void {
    const link = ['/blog', id];
    this.router.navigate(link);
  }

  onBackClick() {
    this.currentPage = this.configService.decrementCurrentBlogPage();
    this.fetchPosts();
  }

  onNextClick() {
    this.configService.incrementCurrentBlogPage().subscribe(result => {
      this.currentPage = result;
      this.fetchPosts();
    })
  }

  isAuthenticated() {
    return this.auth.isAuthenticated();
  }
}
