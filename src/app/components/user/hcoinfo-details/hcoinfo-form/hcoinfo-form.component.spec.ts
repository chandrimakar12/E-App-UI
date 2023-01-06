import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';

import { HcoinfoFormComponent } from './hcoinfo-form.component';

describe('HcoinfoFormComponent', () => {
  let component: HcoinfoFormComponent;
  let fixture: ComponentFixture<HcoinfoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[HttpClientModule,FormsModule],
      declarations: [ HcoinfoFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HcoinfoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
