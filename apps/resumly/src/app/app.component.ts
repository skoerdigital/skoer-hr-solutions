import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutContainerComponent } from '@skoer-hr-solutions/layout/container';
import { LayoutHeaderComponent } from '@skoer-hr-solutions/layout/header';
import { LayoutShellComponent } from '@skoer-hr-solutions/layout/shell';
import { LayoutSideMenuComponent } from '@skoer-hr-solutions/layout/side-menu';
import { PreloaderComponent } from '@skoer-hr-solutions/ui';

@Component({
  standalone: true,
  imports: [RouterModule, PreloaderComponent, LayoutShellComponent],
  selector: 'skoer-hr-solutions-root',
  templateUrl: './app.component.html',
})
export class AppComponent { }
