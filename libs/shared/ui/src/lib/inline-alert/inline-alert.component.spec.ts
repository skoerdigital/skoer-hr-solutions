import { ComponentFixture, TestBed } from '@angular/core/testing';
import { InlineAlertComponent } from './inline-alert.component';

describe('InlineAlertComponent', () => {
  let component: InlineAlertComponent;
  let fixture: ComponentFixture<InlineAlertComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InlineAlertComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(InlineAlertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display the message', () => {
    component.message = 'Test message';
    fixture.detectChanges();
    const element: HTMLElement = fixture.nativeElement;
    expect(element.textContent).toContain('Test message');
  });

  // it('should apply the correct color class', () => {
  //   component.classesForColor = 'text-blue-800 bg-blue-50 dark:bg-gray-900 dark:text-blue-400';
  //   fixture.detectChanges();
  //   const element: HTMLElement = fixture.nativeElement;
  //   expect(element.classList.contains('text-blue-800 bg-blue-50 dark:bg-gray-900 dark:text-blue-400')).toBe(true);
  // });
});