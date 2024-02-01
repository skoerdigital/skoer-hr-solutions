import { PreloaderService } from './preloader.service';

describe('PreloaderService', () => {
  let preloaderService: PreloaderService;

  beforeEach(() => {
    preloaderService = new PreloaderService();
  });

  it('should show the preloader', () => {
    preloaderService.show();
    expect(preloaderService.isVisible()).toBe(true);
  });

  it('should hide the preloader', () => {
    preloaderService.hide();
    expect(preloaderService.isVisible()).toBe(false);
  });

  it('should toggle the visibility state of the preloader', () => {
    preloaderService.toggle();
    expect(preloaderService.isVisible()).toBe(false);

    preloaderService.toggle();
    expect(preloaderService.isVisible()).toBe(true);
  });
});