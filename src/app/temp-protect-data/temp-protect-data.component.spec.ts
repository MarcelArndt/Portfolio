import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TempProtectDataComponent } from './temp-protect-data.component';

describe('TempProtectDataComponent', () => {
  let component: TempProtectDataComponent;
  let fixture: ComponentFixture<TempProtectDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TempProtectDataComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TempProtectDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
