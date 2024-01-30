import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutSideMenuItemComponent } from '../ui';
import { SIDE_MENU_TOKEN } from '../data-access';

@Component({
  selector: 'skoer-hr-solutions-layout-side-menu',
  standalone: true,
  imports: [CommonModule, LayoutSideMenuItemComponent],
  templateUrl: './layout-side-menu.component.html',
  styleUrls: ['layout-side-menu.component.scss'],
})
export class LayoutSideMenuComponent {
  readonly menuConfig = inject(SIDE_MENU_TOKEN);
}
