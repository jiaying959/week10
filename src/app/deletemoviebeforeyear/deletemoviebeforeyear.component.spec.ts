import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletemoviebeforeyearComponent } from './deletemoviebeforeyear.component';

describe('DeletemoviebeforeyearComponent', () => {
  let component: DeletemoviebeforeyearComponent;
  let fixture: ComponentFixture<DeletemoviebeforeyearComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DeletemoviebeforeyearComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletemoviebeforeyearComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
