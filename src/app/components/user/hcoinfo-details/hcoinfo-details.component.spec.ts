import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HcoinfoDetailsComponent } from './hcoinfo-details.component';

describe('HcoinfoDetailsComponent', () => {
  let component: HcoinfoDetailsComponent;
  let fixture: ComponentFixture<HcoinfoDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HcoinfoDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HcoinfoDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
