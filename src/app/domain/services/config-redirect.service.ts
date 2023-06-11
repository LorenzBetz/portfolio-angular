import { Injectable } from '@angular/core';

enum ConfigItems {
  LOCAL_RETURN = "localReturnUrl"
}

@Injectable({
  providedIn: 'root'
})
export class ConfigRedirectService {

  constructor() { }

  public getLocalReturnUrl(): string | undefined {
    const localStorageValue = localStorage.getItem(ConfigItems.LOCAL_RETURN);
    return localStorageValue != "" &&
      localStorageValue != null &&
      localStorageValue != undefined ? localStorageValue : undefined;
  }

  public setLocalReturnUrl(newValue: string) {
    localStorage.setItem(ConfigItems.LOCAL_RETURN, decodeURIComponent(newValue));
  }

  public clearLocalReturnUrl() {
    localStorage.removeItem(ConfigItems.LOCAL_RETURN);
  }
}

