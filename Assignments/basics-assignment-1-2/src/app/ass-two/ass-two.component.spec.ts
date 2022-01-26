import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssTwoComponent } from './ass-two.component';

describe('AssTwoComponent', () => {
  let component: AssTwoComponent;
  let fixture: ComponentFixture<AssTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssTwoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
