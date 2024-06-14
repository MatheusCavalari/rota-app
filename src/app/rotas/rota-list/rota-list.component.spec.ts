import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RotaListComponent } from './rota-list.component';

describe('RotaListComponent', () => {
  let component: RotaListComponent;
  let fixture: ComponentFixture<RotaListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RotaListComponent]
    });
    fixture = TestBed.createComponent(RotaListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
