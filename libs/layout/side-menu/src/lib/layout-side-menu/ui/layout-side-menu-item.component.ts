import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SanitizeHtmlPipe } from '@skoer-hr-solutions/shared/pipes';

@Component({
  selector: '[skoer-hr-solutions-layout-side-menu-item]',
  standalone: true,
  imports: [CommonModule, SanitizeHtmlPipe, RouterModule],
  templateUrl: './layout-side-menu-item.component.html',
})
export class LayoutSideMenuItemComponent {
  @Input({ required: true }) label!: string;
  @Input({ required: true }) route!: string;
  @Input({ required: true }) svg!: any;
}
