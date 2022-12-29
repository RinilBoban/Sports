import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootmanipComponent } from './footmanip.component';

describe('FootmanipComponent', () => {
  let component: FootmanipComponent;
  let fixture: ComponentFixture<FootmanipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootmanipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootmanipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
