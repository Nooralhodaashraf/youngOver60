import { Component } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';

@Component({
  selector: 'app-testimonials',
  imports: [TranslatePipe],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.css',
})
export class TestimonialsComponent {}
