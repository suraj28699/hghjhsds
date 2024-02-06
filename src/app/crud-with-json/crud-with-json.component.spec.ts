import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudWithJsonComponent } from './crud-with-json.component';

describe('CrudWithJsonComponent', () => {
  let component: CrudWithJsonComponent;
  let fixture: ComponentFixture<CrudWithJsonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrudWithJsonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrudWithJsonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
