import { SanitizeHtmlPipe } from './sanitize-html.pipe';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

describe('SanitizeHtmlPipe', () => {
    let pipe: SanitizeHtmlPipe;
    let sanitizer: DomSanitizer;

    beforeEach(() => {
        sanitizer = {
            bypassSecurityTrustHtml: jest.fn((value: string) => value) as any,
        } as DomSanitizer;
        pipe = new SanitizeHtmlPipe(sanitizer);
    });

    it('should transform the input HTML string into a SafeHtml object', () => {
        const inputHtml = '<p>Hello, <strong>World!</strong></p>';
        const expectedSafeHtml = inputHtml as SafeHtml;

        const result = pipe.transform(inputHtml);

        expect(result).toEqual(expectedSafeHtml);
        expect(sanitizer.bypassSecurityTrustHtml).toHaveBeenCalledWith(inputHtml);
    });
});