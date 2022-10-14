import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioSlideComponent } from './exercicio-slide.component';

describe('ExercicioSlideComponent', () => {
  let component: ExercicioSlideComponent;
  let fixture: ComponentFixture<ExercicioSlideComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercicioSlideComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExercicioSlideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
