import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutSideMenuComponent } from './layout-side-menu.component';

describe('LayoutSideMenuComponent', () => {
  let component: LayoutSideMenuComponent;
  let fixture: ComponentFixture<LayoutSideMenuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutSideMenuComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutSideMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
