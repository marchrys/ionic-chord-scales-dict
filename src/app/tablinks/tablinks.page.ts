import { Component, OnInit } from '@angular/core';
import { TranslateConfigService } from '../translate-config.service';

@Component({
  selector: 'app-tablinks',
  templateUrl: './tablinks.page.html',
  styleUrls: ['./tablinks.page.scss'],
})
export class TablinksPage implements OnInit {

  selectedLanguage: string;

  constructor( private translateConfigService: TranslateConfigService) { 
    this.selectedLanguage = this.translateConfigService.getDefaultLanguage();
  }

  ngOnInit() {
  }

}
