import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyTranslateService {
  private translate = inject(TranslateService);

  direction: string = '';

  initNgxTranslate() {
    throw new Error('Method not implemented.');
  }
  changeDir(): void {
    if (localStorage.getItem('lang') === 'en') {
      localStorage.setItem('dir', 'ltr');
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', 'en');
    } else if (localStorage.getItem('lang') === 'ar') {
      localStorage.setItem('dir', 'rtl');

      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'ar');
    } else if (localStorage.getItem('lang') === 'du') {
      localStorage.setItem('dir', 'ltr');

      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', 'du');
    }
    this.direction = localStorage.getItem('dir')!;
  }
  changelanguage(lang: string): void {
    localStorage.setItem('lang', lang);
    this.translate.use(lang);
    this.changeDir();
  }
}
