import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AssThreeComponent } from './ass-three.component';

describe('AssThreeComponent', () => {
  let component: AssThreeComponent;
  let fixture: ComponentFixture<AssThreeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AssThreeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AssThreeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
