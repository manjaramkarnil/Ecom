import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcomdetaolComponent } from './ecomdetaol.component';

describe('EcomdetaolComponent', () => {
  let component: EcomdetaolComponent;
  let fixture: ComponentFixture<EcomdetaolComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EcomdetaolComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcomdetaolComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
