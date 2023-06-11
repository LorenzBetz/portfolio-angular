import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { Apollo, QueryRef, gql } from 'apollo-angular';
import { GetPostGQL, GetPostQuery, Post, UpsertPostGQL } from 'graphql/generated';
import { Observable, Subscription } from 'rxjs';
import { map } from 'rxjs/operators'
import { ConfigService } from 'src/app/domain/services/config.service';
import { PostService } from 'src/app/domain/services/post.service';



@Component({
  selector: 'app-blog-post',
  templateUrl: './blog-post.component.html',
  styleUrls: ['./blog-post.component.scss']
})
export class BlogPostComponent implements OnInit {

  private id!: any;
  protected isEditMode!: boolean;
  post!: Post;

  constructor(
    private route: ActivatedRoute,
    private postService: PostService,
    private upsertPostGQL: UpsertPostGQL,
    private configService: ConfigService,
    private auth: OidcSecurityService
  ) { }

  ngOnInit(): void {

    this.isEditMode = false;

    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        this.id = params['id'];
      }
    });

    this.postService.getPost(this.id).subscribe(
      result => {
        this.post = result.data.post;
        this.isEditMode = false;
      },
      err => this.isEditMode = true
    )

  }

  toggleEdit = (): void => {
    this.isEditMode = !this.isEditMode;
  }

  save(editPost: Post) {
    this.upsertPostGQL.mutate({ title: editPost.title, text: editPost.text, authorId: "1", postId: editPost.id })
      .subscribe(result => {
        this.post = result.data?.upsertPost as Post;
        this.configService.setCurrentToLastBlogPage().subscribe();
      });
    this.toggleEdit();
  }

  isAuthenticated() {
    return this.auth.isAuthenticated();
  }
}
