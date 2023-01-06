import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeFormComponent } from './ae-form.component';

describe('AeFormComponent', () => {
  let component: AeFormComponent;
  let fixture: ComponentFixture<AeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AeFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AeFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
