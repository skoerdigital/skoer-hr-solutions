import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

/**
 * SanitizeHtmlPipe is a custom pipe that sanitizes HTML content.
 */
@Pipe({
    name: 'sanitizeHtml',
    standalone: true,
})
export class SanitizeHtmlPipe implements PipeTransform {
  constructor(private _sanitizer: DomSanitizer) {}

  /**
   * Transforms the input HTML string into a SafeHtml object by bypassing security checks.
   * @param value - The HTML string to be sanitized.
   * @returns A SafeHtml object representing the sanitized HTML content.
   */
  transform(value: string): SafeHtml {
    return this._sanitizer.bypassSecurityTrustHtml(value);
  }
}
