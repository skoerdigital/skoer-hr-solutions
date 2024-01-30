import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutContainerComponent } from '@skoer-hr-solutions/layout/container';
import { LayoutHeaderComponent } from '@skoer-hr-solutions/layout/header';
import { LayoutSideMenuComponent } from '@skoer-hr-solutions/layout/side-menu';

@Component({
  selector: 'skoer-hr-solutions-layout-shell',
  standalone: true,
  imports: [CommonModule, LayoutContainerComponent, LayoutHeaderComponent, LayoutSideMenuComponent],
  templateUrl: './layout-shell.component.html',
})
export class LayoutShellComponent {}
