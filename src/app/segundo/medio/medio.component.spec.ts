/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MedioComponent } from './medio.component';

describe('MedioComponent', () => {
  let component: MedioComponent;
  let fixture: ComponentFixture<MedioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MedioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MedioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
