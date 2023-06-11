import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ApolloQueryResult, gql } from '@apollo/client/core';
import { GetPostGQL, GetPostQuery } from 'graphql/generated';
import { Observable, throwError as observableThrowError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

const GET_POST = gql`
  query GetPost($id: ID!) {
    post(id: $id){
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

@Injectable()
export class PostService {

    private postsUrl = environment.blogApiEndpoint + '/posts';


    constructor(private http: HttpClient,  private getPostGQL: GetPostGQL) { 
      
    }

    getPostsCount(): Observable<number> {
        var result = this.http
            .get<number>(this.postsUrl)
            .pipe(map(data => {
                return data;
            }), catchError(this.handleError));

        return result;
    }

    getPost(id: string): Observable<ApolloQueryResult<GetPostQuery>> {
        return this.getPostGQL.fetch({ id: id });
    }
    
    private handleError(res: HttpErrorResponse | any) {
        console.error(res.error || res.body.error);
        return observableThrowError(res.error || 'Server error');
    }
}