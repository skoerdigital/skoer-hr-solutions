import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PreloaderService {
  private readonly _isVisible = signal(true);
  readonly isVisible = this._isVisible.asReadonly();

  show(): void {
    this._isVisible.set(true);
  }

  hide(): void {
    this._isVisible.set(false);
  }

  toggle(): void {
    this._isVisible.update(isVisible => !isVisible);
  }
}
