import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutSideMenuComponent } from '@skoer-hr-solutions/layout/side-menu';
import { PreloaderComponent } from '@skoer-hr-solutions/ui';

import { initFlowbite } from 'flowbite';

@Component({
  standalone: true,
  imports: [RouterModule, PreloaderComponent, LayoutSideMenuComponent],
  selector: 'skoer-hr-solutions-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  ngOnInit(): void {
    initFlowbite();
  }
}
