import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

const COLORS_TO_CLASS = {
  success: 'text-blue-800 bg-blue-50 dark:bg-gray-900 dark:text-blue-400',
  error: 'text-red-800 bg-red-50 dark:bg-gray-900 dark:text-red-400',
  warning: 'text-yellow-800 bg-yellow-50 dark:bg-gray-900 dark:text-yellow-400',
  info: 'text-blue-800 bg-blue-50 dark:bg-gray-900 dark:text-blue-400',
  neutral: 'text-gray-800 bg-gray-50 dark:bg-gray-900 dark:text-gray-400',
}

type AlertColor = keyof typeof COLORS_TO_CLASS;

/**
 * Represents the InlineAlertComponent which displays an inline alert message.
 */
@Component({
  selector: 'skoer-hr-solutions-inline-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './inline-alert.component.html',
})
export class InlineAlertComponent {
  /**
   * The classes for the color of the inline alert.
   */
  @Input({ 
    transform: (color: string) => COLORS_TO_CLASS[color as AlertColor], 
    required: true, 
    alias: 'color',
  }) 
  classesForColor!: typeof COLORS_TO_CLASS[AlertColor];
  
  /**
   * The message to be displayed in the inline alert.
   */
  @Input({ required: true }) message!: string;
}
