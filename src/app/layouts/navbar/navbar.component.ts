import { Component, inject, signal } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HostListener } from '@angular/core';
import { MyTranslateService } from '../../core/service/my-translate.service';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  private readonly myTranslateService = inject(MyTranslateService);
  mobileExperienceOpen = false;
  searchOpen = false;

  toggleSearch() {
    this.searchOpen = !this.searchOpen;
  }
  direction: string = 'ltr';
  @HostListener('document:click', ['$event'])
  onDocumentClick(event: MouseEvent) {
    const target = event.target as HTMLElement;

    if (!target.closest('.language-dropdown')) {
      this.languageMenuOpen = false;
    }
  }

  toggleExperienceMenu() {
    this.mobileExperienceOpen = !this.mobileExperienceOpen;
  }
  languageMenuOpen = false;

  toggleLanguageMenu() {
    this.languageMenuOpen = !this.languageMenuOpen;
  }

  mobileMenuOpen = false;

  toggleMobileMenu() {
    this.mobileMenuOpen = !this.mobileMenuOpen;
  }

  closeMobileMenu() {
    this.mobileMenuOpen = false;
  }

  changeLang(lang: string): void {
    this.myTranslateService.changelanguage(lang);
    this.myTranslateService.direction;
    this.direction = this.myTranslateService.direction;
    console.log(this.direction);
  }
}
