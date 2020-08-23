import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LangugesComponent } from './languges.component';

describe('LangugesComponent', () => {
  let component: LangugesComponent;
  let fixture: ComponentFixture<LangugesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LangugesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LangugesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
