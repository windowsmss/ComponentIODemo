import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SecongChildComponentComponent } from './secong-child-component.component';

describe('SecongChildComponentComponent', () => {
  let component: SecongChildComponentComponent;
  let fixture: ComponentFixture<SecongChildComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SecongChildComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SecongChildComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
