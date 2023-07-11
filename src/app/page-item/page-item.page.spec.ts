import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PageItemPage } from './page-item.page';

describe('PageItemPage', () => {
  let component: PageItemPage;
  let fixture: ComponentFixture<PageItemPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(PageItemPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
