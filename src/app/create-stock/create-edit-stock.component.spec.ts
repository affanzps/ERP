import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditStockComponent } from './create-edit-stock.component';

describe('CreateEditStockComponent', () => {
  let component: CreateEditStockComponent;
  let fixture: ComponentFixture<CreateEditStockComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CreateEditStockComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEditStockComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
