import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NasaapiComponent } from './nasaapi.component';

describe('NasaapiComponent', () => {
  let component: NasaapiComponent;
  let fixture: ComponentFixture<NasaapiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [NasaapiComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NasaapiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
