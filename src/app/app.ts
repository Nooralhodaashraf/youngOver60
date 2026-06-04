import { Component, inject, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { MyTranslateService } from './core/service/my-translate.service';
import { FooterComponent } from './layouts/footer/footer.component';
import { MainLayoutComponent } from './layouts/main-layout/main-layout.component';
import { NavbarComponent } from './layouts/navbar/navbar.component';

@Component({
  selector: 'app-root',
  imports: [MainLayoutComponent],
  templateUrl: './app.html',
  styleUrl: './app.css',
})
export class App {
  protected readonly title = signal('youngOver60');

  private readonly translate = inject(TranslateService);
  private readonly myTranslateService = inject(MyTranslateService);

  constructor() {
    this.myTranslateService.initNgxTranslate;
    this.translate.addLangs(['ar', 'en', 'du']);
    if (localStorage.getItem('lang')) {
      this.translate.use(localStorage.getItem('lang')!);
      this.myTranslateService.changeDir();
    }
  }
}
