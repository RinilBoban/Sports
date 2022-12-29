import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FootmbappeComponent } from './footmbappe.component';

describe('FootmbappeComponent', () => {
  let component: FootmbappeComponent;
  let fixture: ComponentFixture<FootmbappeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FootmbappeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FootmbappeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
