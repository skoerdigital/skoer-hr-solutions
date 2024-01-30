import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { PreloaderComponent } from '@skoer-hr-solutions/ui';

import { initFlowbite } from 'flowbite';

@Component({
  standalone: true,
  imports: [RouterModule, PreloaderComponent],
  selector: 'skoer-hr-solutions-root',
  templateUrl: './app.component.html',
})
export class AppComponent {
  ngOnInit(): void {
    initFlowbite();
  }
}
