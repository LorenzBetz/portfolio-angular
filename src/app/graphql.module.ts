import { NgModule } from '@angular/core';
import { ApolloModule, APOLLO_OPTIONS } from 'apollo-angular';
import { ApolloClientOptions, ApolloLink, InMemoryCache } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
import { setContext } from '@apollo/client/link/context';
import { OidcSecurityService } from 'angular-auth-oidc-client';
import { onError } from '@apollo/client/link/error';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';


const uri = 'http://localhost:8087/graphql'; // <-- add the URL of the GraphQL server here

export function createApollo(httpLink: HttpLink, oidc: OidcSecurityService, router: Router): ApolloClientOptions<any> {



  const auth = setContext(
    request =>
      new Promise((success, fail) => {
        oidc.getIdToken().subscribe(token => {
          if (token != null) {
            success({ headers: { Authorization: `Bearer ${token}` } });
          } {
            success({});
          }
        })
      })
  );

  // Error link
  const errorLink = onError(({ networkError, graphQLErrors, operation }) => {
    if (graphQLErrors) {
      graphQLErrors.map(({ message, locations, path }) => {
        if (message == "Unauthorized") {
          router.navigate(['/login', { return: encodeURIComponent(window.location.pathname) }]);
        }
        console.log(`[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`);
      }
      );
    }
    if (networkError) {
      console.log(`[Network error]:`, networkError);
      var httpErrorResponse = networkError as HttpErrorResponse;
      if (httpErrorResponse.status == 401 || httpErrorResponse.status == 403) {
        router.navigate(['/login', { return: encodeURIComponent(window.location.pathname) }]);
      }
    }
  });

  const link = ApolloLink.from([auth, errorLink, httpLink.create({ uri })]);

  return {
    link,
    cache: new InMemoryCache(),
  };
}

@NgModule({
  exports: [ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink, OidcSecurityService, Router]
    }
  ],
})
export class GraphQLModule { }
