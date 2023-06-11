import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { AuthInterceptor, AuthModule, LogLevel } from 'angular-auth-oidc-client';


@NgModule({
    imports: [
        AuthModule.forRoot({
            config: {
                authority: 'https://accounts.google.com',
                redirectUrl: window.location.origin + "/login",
                clientId: '133226062253-7aj82np5lerivdrl1u1sq203lj2dn8fe.apps.googleusercontent.com',
                responseType: 'id_token token',
                scope: 'openid email profile',
                triggerAuthorizationResultEvent: true,
                postLogoutRedirectUri: window.location.origin + '/unauthorized',
                startCheckSession: false,
                silentRenew: true,
                silentRenewUrl: window.location.origin + '/silent-renew.html',
                historyCleanupOff: true,
            }
        }),
        HttpClientModule,
    ],
    exports: [AuthModule]
})
export class AuthConfigModule { }
