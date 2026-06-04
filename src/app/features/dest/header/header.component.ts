import { Component, ElementRef, ViewChild } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  imports: [TranslatePipe],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  @ViewChild('video') videoRef!: ElementRef<HTMLVideoElement>;
  @ViewChild('heroVideo') video!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    this.videoRef.nativeElement.muted = true;
    this.videoRef.nativeElement.volume = 0;
    this.video.nativeElement.play().catch(() => {});
  }
}
