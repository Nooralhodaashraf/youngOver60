import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MyTranslateService {
  initNgxTranslate() {
    throw new Error('Method not implemented.');
  }
  changeDir(): void {
    if (localStorage.getItem('lang') === 'en') {
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', 'en');
    } else if (localStorage.getItem('lang') === 'ar') {
      document.documentElement.setAttribute('dir', 'rtl');
      document.documentElement.setAttribute('lang', 'ar');
    } else if (localStorage.getItem('lang') === 'du') {
      document.documentElement.setAttribute('dir', 'ltr');
      document.documentElement.setAttribute('lang', 'du');
    }
  }
}
