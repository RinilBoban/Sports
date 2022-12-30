import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TicketbookerComponent } from './ticketbooker.component';

describe('TicketbookerComponent', () => {
  let component: TicketbookerComponent;
  let fixture: ComponentFixture<TicketbookerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TicketbookerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TicketbookerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
