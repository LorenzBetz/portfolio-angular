import { gql } from 'apollo-angular';
import { Injectable } from '@angular/core';
import * as Apollo from 'apollo-angular';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Author = {
  __typename?: 'Author';
  accountId?: Maybe<Scalars['String']>;
  comments?: Maybe<Array<Maybe<Comment>>>;
  id: Scalars['ID'];
  name?: Maybe<Scalars['String']>;
  pictureUrl?: Maybe<Scalars['String']>;
  posts?: Maybe<Array<Maybe<Post>>>;
};

export type Comment = {
  __typename?: 'Comment';
  author?: Maybe<Author>;
  created?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  post?: Maybe<Post>;
  text?: Maybe<Scalars['String']>;
};

/**  The Root Mutation for the application */
export type Mutation = {
  __typename?: 'Mutation';
  upsertAuthor: Author;
  upsertComment: Comment;
  upsertPost: Post;
};


/**  The Root Mutation for the application */
export type MutationUpsertAuthorArgs = {
  accountId: Scalars['String'];
  authorId?: InputMaybe<Scalars['String']>;
};


/**  The Root Mutation for the application */
export type MutationUpsertCommentArgs = {
  authorId: Scalars['String'];
  commentId?: InputMaybe<Scalars['String']>;
  postId: Scalars['String'];
  text: Scalars['String'];
};


/**  The Root Mutation for the application */
export type MutationUpsertPostArgs = {
  authorId: Scalars['String'];
  postId?: InputMaybe<Scalars['String']>;
  text: Scalars['String'];
  title: Scalars['String'];
};

export type Post = {
  __typename?: 'Post';
  author?: Maybe<Author>;
  categories?: Maybe<Array<Maybe<Scalars['String']>>>;
  comments?: Maybe<Array<Maybe<Comment>>>;
  created?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  text: Scalars['String'];
  title: Scalars['String'];
  updated?: Maybe<Scalars['String']>;
};

/**  The Root Query for the application */
export type Query = {
  __typename?: 'Query';
  author: Author;
  authors: Array<Maybe<Author>>;
  comment: Comment;
  comments: Array<Maybe<Comment>>;
  post: Post;
  posts: Array<Maybe<Post>>;
};


/**  The Root Query for the application */
export type QueryAuthorArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


/**  The Root Query for the application */
export type QueryCommentArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


/**  The Root Query for the application */
export type QueryPostArgs = {
  id?: InputMaybe<Scalars['ID']>;
};


/**  The Root Query for the application */
export type QueryPostsArgs = {
  page?: InputMaybe<Scalars['Int']>;
  size?: InputMaybe<Scalars['Int']>;
};

export type GetPostsQueryVariables = Exact<{
  page: Scalars['Int'];
  size: Scalars['Int'];
}>;


export type GetPostsQuery = { __typename?: 'Query', posts: Array<{ __typename?: 'Post', id: string, title: string, created?: string | null, author?: { __typename?: 'Author', id: string, accountId?: string | null, name?: string | null, pictureUrl?: string | null } | null } | null> };

export type UpsertPostMutationVariables = Exact<{
  title: Scalars['String'];
  text: Scalars['String'];
  authorId: Scalars['String'];
  postId?: InputMaybe<Scalars['String']>;
}>;


export type UpsertPostMutation = { __typename?: 'Mutation', upsertPost: { __typename?: 'Post', id: string, title: string, text: string } };

export type GetPostQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type GetPostQuery = { __typename?: 'Query', post: { __typename?: 'Post', id: string, title: string, text: string, created?: string | null, updated?: string | null, author?: { __typename?: 'Author', id: string } | null } };

export const GetPostsDocument = gql`
    query GetPosts($page: Int!, $size: Int!) {
  posts(page: $page, size: $size) {
    id
    title
    created
    author {
      id
      accountId
      name
      pictureUrl
    }
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetPostsGQL extends Apollo.Query<GetPostsQuery, GetPostsQueryVariables> {
    override document = GetPostsDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const UpsertPostDocument = gql`
    mutation UpsertPost($title: String!, $text: String!, $authorId: String!, $postId: String) {
  upsertPost(title: $title, text: $text, authorId: $authorId, postId: $postId) {
    id
    title
    text
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class UpsertPostGQL extends Apollo.Mutation<UpsertPostMutation, UpsertPostMutationVariables> {
    override document = UpsertPostDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }
export const GetPostDocument = gql`
    query GetPost($id: ID!) {
  post(id: $id) {
    id
    title
    text
    author {
      id
    }
    created
    updated
  }
}
    `;

  @Injectable({
    providedIn: 'root'
  })
  export class GetPostGQL extends Apollo.Query<GetPostQuery, GetPostQueryVariables> {
    override document = GetPostDocument;
    
    constructor(apollo: Apollo.Apollo) {
      super(apollo);
    }
  }