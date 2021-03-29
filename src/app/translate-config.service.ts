import { Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})
export class TranslateConfigService {

  constructor(
    private translate: TranslateService
  ) { }

  getDefaultLanguage(){
    let language = this.translate.getBrowserLang();

    if(['en', 'fr'].includes(language)){
      this.translate.setDefaultLang(language);
    }
    else {
      this.translate.setDefaultLang('en');
    }

    return language;
  }

  setLanguage(setLang) {
    this.translate.use(setLang);
  }

}
