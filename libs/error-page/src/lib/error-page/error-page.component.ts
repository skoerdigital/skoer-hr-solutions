import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'skoer-hr-solutions-error-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './error-page.component.html',
})
export class ErrorPageComponent {
  @Input({ required: true }) code!: number;
  @Input({ required: true }) message!: string;
  @Input({ required: true }) description!: string;
}
