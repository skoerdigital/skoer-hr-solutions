import { Injectable, signal } from '@angular/core';

/**
 * Service that manages the visibility state of a preloader component using a signal.
 */
@Injectable({
  providedIn: 'root',
})
export class PreloaderService {
  /**
   * Indicates whether the preloader is currently visible.
   */
  private readonly _isVisible = signal(true);

  /**
   * Signal that holds the visibility state of the preloader.
   */
  readonly isVisible = this._isVisible.asReadonly();

  /**
   * Shows the preloader.
   */
  show(): void {
    this._isVisible.set(true);
  }

  /**
   * Hides the preloader.
   */
  hide(): void {
    this._isVisible.set(false);
  }

  /**
   * Toggles the visibility state of the preloader.
   */
  toggle(): void {
    this._isVisible.update(isVisible => !isVisible);
  }
}
