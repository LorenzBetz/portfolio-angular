import { Component, Input, OnInit, OnChanges, SimpleChanges, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { EditorInstance, EditorOption } from 'angular-markdown-editor';
import { gql } from 'apollo-angular';
import { Post, UpsertPostGQL } from 'graphql/generated';
import { BaseComponent } from 'src/app/domain/base.component';
import { MarkdownService } from 'ngx-markdown';

const UPSERT_POST = gql`
mutation UpsertPost($title: String!, $text: String!, $authorId: String!, $postId: String) {
  upsertPost(
    title: $title, text: $text, authorId: $authorId, postId: $postId) {
    id
    title
    text
  }
}
`;



@Component({
  selector: 'app-blog-post-edit',
  templateUrl: './blog-post-edit.component.html',
  styleUrls: ['./blog-post-edit.component.scss']
})
export class BlogPostEditComponent implements OnInit, OnChanges {

  @Input() post: Post;
  @Input() toggleEdit: () => void;

  @Output() save = new EventEmitter<Post>();

  editPost: Post;

  bsEditorInstance!: EditorInstance;
  markdownText = '';
  showEditor = true;
  templateForm!: FormGroup;
  editorOptions!: EditorOption;

  constructor(
    private fb: FormBuilder,
    private markdownService: MarkdownService) {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.editPost = { ...this.post };
  }

  ngOnInit(): void {
    this.editorOptions = {
      autofocus: false,
      iconlibrary: 'fa',
      savable: false,
      onShow: (e) => this.bsEditorInstance = e,
      parser: (val) => this.parse(val)
    };

    this.buildForm(this.markdownText);
  }

  buildForm(markdownText: string) {
    this.templateForm = this.fb.group({
      body: [markdownText],
      isPreview: [true]
    });
  }

  hidePreview() {
    if (this.bsEditorInstance && this.bsEditorInstance.hidePreview) {
      this.bsEditorInstance.hidePreview();
    }
  }

  onSaveClick() {
    this.save.emit(this.editPost);
  }

  /** highlight all code found, needs to be wrapped in timer to work properly */
  highlight() {
    setTimeout(() => {
      this.markdownService.highlight();
    });
  }

  parse(inputValue: string) {
    const markedOutput = this.markdownService.parse(inputValue.trim());
    this.highlight();

    return markedOutput;
  }

}
