import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WithReactiveFormComponent } from './with-reactive-form.component';

describe('WithReactiveFormComponent', () => {
  let component: WithReactiveFormComponent;
  let fixture: ComponentFixture<WithReactiveFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ WithReactiveFormComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WithReactiveFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
