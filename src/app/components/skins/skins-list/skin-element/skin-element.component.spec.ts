import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SkinElementComponent } from './skin-element.component';

describe('SkinElementComponent', () => {
  let component: SkinElementComponent;
  let fixture: ComponentFixture<SkinElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SkinElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SkinElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
