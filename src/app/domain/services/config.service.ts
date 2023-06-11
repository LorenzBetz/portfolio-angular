import { Injectable } from '@angular/core';
import { ConfigBlogOverviewService } from './config-blog-overview.service';
import { Observable } from 'rxjs';
import { ConfigRedirectService } from './config-redirect.service';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {

  constructor(
    private configBlogOverviewService: ConfigBlogOverviewService,
    private configRedirectService: ConfigRedirectService) { }

  public currentBlogPage(): number {
    return this.configBlogOverviewService.currentBlogPage();
  }

  decrementCurrentBlogPage(): number {
    return this.configBlogOverviewService.decrementCurrentBlogPage();
  }

  incrementCurrentBlogPage(): Observable<number> {
    return this.configBlogOverviewService.incrementCurrentBlogPage();
  }

  setCurrentToLastBlogPage(): Observable<number> {
    return this.configBlogOverviewService.setCurrentToLastBlogPage();
  }

  setPageSize(newPageSize: number): number {
    return this.configBlogOverviewService.setPageSize(newPageSize);
  }

  public getPageSize(): number {
    return this.configBlogOverviewService.getPageSize();
  }

  public getLocalReturnUrl(): string | undefined {
    return this.configRedirectService.getLocalReturnUrl();
  }

  public setLocalReturnUrl(newValue: string) {
    return this.configRedirectService.setLocalReturnUrl(newValue);
  }

  public clearLocalReturnUrl() {
    return this.configRedirectService.clearLocalReturnUrl();
  }

}
