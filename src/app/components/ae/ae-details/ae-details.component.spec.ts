import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeDetailsComponent } from './ae-details.component';

describe('AeDetailsComponent', () => {
  let component: AeDetailsComponent;
  let fixture: ComponentFixture<AeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AeDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
