/**
 * Represents an injection token for the API URL.
 * @remarks
 * The API URL should be provided as a string without the '/' slash at the beginning.
 */
import { InjectionToken } from '@angular/core';

export const API_URL = new InjectionToken<string>('API_URL');
