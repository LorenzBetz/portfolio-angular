import { HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { OidcSecurityService } from "angular-auth-oidc-client";
import { switchMap, tap } from "rxjs";


@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private auth: OidcSecurityService) { }

  intercept(req: HttpRequest<any>, next: HttpHandler) {

    return this.auth.isAuthenticated().pipe(
      switchMap(isAuthenticated => {
        if (isAuthenticated && req.url.includes("localhost")) {
          return this.auth.getIdToken().pipe(
            tap(token => token),
            switchMap(token => {
              const newRequest = req.clone({
                setHeaders: {
                  Authorization: `Bearer ${token}`
                }
              });
              return next.handle(newRequest);
            })
          );
        } else {
          return next.handle(req);
        }
      })
    )
  }
}