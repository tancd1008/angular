import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategotyBookComponent } from './categoty-book.component';

describe('CategotyBookComponent', () => {
  let component: CategotyBookComponent;
  let fixture: ComponentFixture<CategotyBookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CategotyBookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CategotyBookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
