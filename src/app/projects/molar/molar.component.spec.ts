import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MolarComponent } from './molar.component';

describe('MolarComponent', () => {
  let component: MolarComponent;
  let fixture: ComponentFixture<MolarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [MolarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MolarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
