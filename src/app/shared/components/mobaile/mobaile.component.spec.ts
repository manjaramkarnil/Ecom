import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MobaileComponent } from './mobaile.component';

describe('MobaileComponent', () => {
  let component: MobaileComponent;
  let fixture: ComponentFixture<MobaileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MobaileComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MobaileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
