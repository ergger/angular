/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MenorComponent } from './menor.component';

describe('MenorComponent', () => {
  let component: MenorComponent;
  let fixture: ComponentFixture<MenorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
