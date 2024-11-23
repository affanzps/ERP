import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ActivitiesIconComponent } from './activities-icon.component';

describe('ActivitiesIconComponent', () => {
  let component: ActivitiesIconComponent;
  let fixture: ComponentFixture<ActivitiesIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ActivitiesIconComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ActivitiesIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
