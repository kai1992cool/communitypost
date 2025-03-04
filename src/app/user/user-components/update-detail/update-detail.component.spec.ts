import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateDetailComponent } from './update-detail.component';

describe('UpdateDetailComponent', () => {
  let component: UpdateDetailComponent;
  let fixture: ComponentFixture<UpdateDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [UpdateDetailComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UpdateDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
