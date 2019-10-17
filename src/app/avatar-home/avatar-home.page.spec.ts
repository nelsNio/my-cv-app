import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AvatarHomePage } from './avatar-home.page';

describe('AvatarHomePage', () => {
  let component: AvatarHomePage;
  let fixture: ComponentFixture<AvatarHomePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AvatarHomePage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AvatarHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
