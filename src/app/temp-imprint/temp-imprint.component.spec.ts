import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempImprintComponent } from './temp-imprint.component';

describe('TempImprintComponent', () => {
  let component: TempImprintComponent;
  let fixture: ComponentFixture<TempImprintComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempImprintComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempImprintComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
