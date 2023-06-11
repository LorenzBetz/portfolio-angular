import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthOptions, OidcSecurityService } from 'angular-auth-oidc-client';
import { Observable } from 'rxjs';
import { ConfigService } from '../domain/services/config.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(
    public oidcSecurityService: OidcSecurityService, 
    private route: ActivatedRoute,
    private router: Router,
    private configService: ConfigService) { }

  ngOnInit(): void {
    this.oidcSecurityService.checkAuth().subscribe(({ isAuthenticated, userData }) => {
      
      var returnUrl = this.configService.getLocalReturnUrl();
      
      if(isAuthenticated && returnUrl) {
        this.configService.clearLocalReturnUrl();
        this.router.navigate([returnUrl]);
      } else {
        this.setLocalReturnUrl();
      }
    });
  }

  setLocalReturnUrl(){
    this.route.params.forEach((params: Params) => {
      if (params['return'] !== undefined) {
        this.configService.setLocalReturnUrl(params['return'])
        console.log("GetLocalReturnUrl: " + params['return'])
      } else {
        console.log("GetLocalReturnUrl: Nothing present!")
      }
    });
  }

  login() {
    this.oidcSecurityService.authorize();
  }

  logout() {
    this.oidcSecurityService.logoff().subscribe((result) => console.log(result));
  }

  isAuthenticated(): Observable<boolean> {
    return this.oidcSecurityService.isAuthenticated();
  }
}