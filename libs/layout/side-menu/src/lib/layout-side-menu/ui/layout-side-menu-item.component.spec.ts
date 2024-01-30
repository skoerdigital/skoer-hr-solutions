import { ComponentFixture, TestBed } from '@angular/core/testing';
import { LayoutSideMenuItemComponent } from './layout-side-menu-item.component';

describe('LayoutSideMenuComponent', () => {
  let component: LayoutSideMenuItemComponent;
  let fixture: ComponentFixture<LayoutSideMenuItemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LayoutSideMenuItemComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(LayoutSideMenuItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
