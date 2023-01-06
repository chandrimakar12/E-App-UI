import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, NgForm } from '@angular/forms';

import { AeFormComponent } from './ae-form.component';

describe('AeFormComponent', () => {
  let component: AeFormComponent;
  let fixture: ComponentFixture<AeFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule,FormsModule],
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
