import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HEADER_TOKEN } from '../data-access/providers';

@Component({
  selector: 'skoer-hr-solutions-layout-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './layout-header.component.html',
})
export class LayoutHeaderComponent {
  readonly appName = inject(HEADER_TOKEN)?.appName;
}
