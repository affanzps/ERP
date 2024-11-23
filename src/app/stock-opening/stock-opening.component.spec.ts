import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockOpeningComponent } from './stock-opening.component';

describe('StockOpeningComponent', () => {
  let component: StockOpeningComponent;
  let fixture: ComponentFixture<StockOpeningComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [StockOpeningComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StockOpeningComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
