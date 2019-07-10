import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfessionCardComponent } from './confession-card.component';

describe('ConfessionCardComponent', () => {
  let component: ConfessionCardComponent;
  let fixture: ComponentFixture<ConfessionCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfessionCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfessionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
