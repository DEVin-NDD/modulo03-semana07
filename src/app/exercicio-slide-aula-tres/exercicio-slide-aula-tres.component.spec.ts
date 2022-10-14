import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExercicioSlideAulaTresComponent } from './exercicio-slide-aula-tres.component';

describe('ExercicioSlideAulaTresComponent', () => {
  let component: ExercicioSlideAulaTresComponent;
  let fixture: ComponentFixture<ExercicioSlideAulaTresComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExercicioSlideAulaTresComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExercicioSlideAulaTresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
