import { Injectable } from '@angular/core';
import { PostService } from './post.service';
import { Observable, map } from 'rxjs';

enum ConfigItems {
  CURRENT_BLOG_PAGE = "currentBlogPage",
  PAGE_SIZE = "pageSize",
}

@Injectable({
  providedIn: 'root'
})
export class ConfigBlogOverviewService {

  defaultBlogPage: number = 0;
  defaultPageSize: number = 10;


  constructor(private postService: PostService) { }

  public currentBlogPage(): number {
    const localStorageValue = this.getValueFromLocalStorage(ConfigItems.CURRENT_BLOG_PAGE)
    return localStorageValue ? localStorageValue : this.defaultBlogPage;
  }

  public setPageSize(newPageSize: number): number {
    if (newPageSize > 0) {
      localStorage.setItem(ConfigItems.PAGE_SIZE, newPageSize.toString());
    }

    return this.getPageSize();
  }

  public decrementCurrentBlogPage(): number {
    var blogPage = this.currentBlogPage();

    if (blogPage > 0) {
      blogPage--;
      localStorage.setItem(ConfigItems.CURRENT_BLOG_PAGE, blogPage.toString());
    }

    return blogPage;
  }

  public incrementCurrentBlogPage(): Observable<number> {
    return this.postService.getPostsCount().pipe(map(count => {
      var blogPage = this.currentBlogPage();

      if (blogPage < (this.calcNoOfPages(count))) {
        blogPage++;
        localStorage.setItem(ConfigItems.CURRENT_BLOG_PAGE, blogPage.toString());
      }
      return blogPage;
    }));
  }

  public setCurrentToLastBlogPage(): Observable<number> {
    return this.postService.getPostsCount().pipe(map(count => {
      const noOfPages = this.calcNoOfPages(count);
      localStorage.setItem(ConfigItems.CURRENT_BLOG_PAGE, noOfPages.toString());
      return noOfPages;
    }));
  }

  public getPageSize(): number {
    const localStorageValue = this.getValueFromLocalStorage(ConfigItems.PAGE_SIZE)
    return localStorageValue ? localStorageValue : this.defaultPageSize;
  }

  private calcNoOfPages(count: number): number {
    return Math.ceil((count / this.getPageSize()) - 1)
  }

  private getValueFromLocalStorage(queryName: string): number | undefined {
    const localStorageValue = localStorage.getItem(queryName);
    return localStorageValue ? parseInt(localStorageValue) : undefined;
  }
}
