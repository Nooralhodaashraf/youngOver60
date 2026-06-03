import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent {
  mobileExperienceOpen = false;
  searchOpen = false;

  toggleSearch() {
    this.searchOpen = !this.searchOpen;
  }

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
}
