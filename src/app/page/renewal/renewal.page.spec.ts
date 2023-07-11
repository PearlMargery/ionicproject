import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RenewalPage } from './renewal.page';

describe('RenewalPage', () => {
  let component: RenewalPage;
  let fixture: ComponentFixture<RenewalPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(RenewalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
