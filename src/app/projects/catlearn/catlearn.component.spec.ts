import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CatlearnComponent } from './catlearn.component';

describe('CatlearnComponent', () => {
  let component: CatlearnComponent;
  let fixture: ComponentFixture<CatlearnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatlearnComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CatlearnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
