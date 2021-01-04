import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmationDialogForDonationTypeComponent } from './confirmation-dialog-for-donation-type.component';

describe('ConfirmationDialogForDonationTypeComponent', () => {
  let component: ConfirmationDialogForDonationTypeComponent;
  let fixture: ComponentFixture<ConfirmationDialogForDonationTypeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfirmationDialogForDonationTypeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmationDialogForDonationTypeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
