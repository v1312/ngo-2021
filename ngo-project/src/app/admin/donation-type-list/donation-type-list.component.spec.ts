import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DonationTypeListComponent } from './donation-type-list.component';

describe('DonationTypeListComponent', () => {
  let component: DonationTypeListComponent;
  let fixture: ComponentFixture<DonationTypeListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DonationTypeListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DonationTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
