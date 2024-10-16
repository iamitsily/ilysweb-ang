import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SintonyComponent } from './sintony.component';

describe('SintonyComponent', () => {
  let component: SintonyComponent;
  let fixture: ComponentFixture<SintonyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SintonyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SintonyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
