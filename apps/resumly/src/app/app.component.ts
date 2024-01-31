import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { LayoutShellComponent } from '@skoer-hr-solutions/layout/shell';
import { PreloaderComponent } from '@skoer-hr-solutions/ui';

@Component({
  standalone: true,
  imports: [RouterModule, PreloaderComponent, LayoutShellComponent],
  selector: 'skoer-hr-solutions-root',
  templateUrl: './app.component.html',
})
export class AppComponent { }
