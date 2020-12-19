import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FileElementComponent } from './file-element.component';

describe('FileElementComponent', () => {
  let component: FileElementComponent;
  let fixture: ComponentFixture<FileElementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FileElementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FileElementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
