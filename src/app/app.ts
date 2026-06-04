import { Component, inject, PLATFORM_ID, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './layouts/navbar/navbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { MyTranslateService } from './core/service/my-translate.service';
import { TranslateService } from '@ngx-translate/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('youngOver60');

  private readonly translate = inject(TranslateService);
  private readonly myTranslateService = inject(MyTranslateService);

  constructor() {
    this.myTranslateService.initNgxTranslate();
    this.translate.addLangs(['ar', 'en', 'du']);
    if (localStorage.getItem('lang')) {
      this.translate.use(localStorage.getItem('lang')!);
      this.myTranslateService.changeDir();
    }
  }
}
