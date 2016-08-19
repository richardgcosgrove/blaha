import { Component, OnInit, AfterViewInit } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import {ExercisePage} from '../exercise/exercise';
import {Routine} from '../../providers/routine/routine';
import {Weight} from '../../providers/weight/weight';

/*
  Generated class for the WorkoutPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  inputs: ['exerciseFinished'],
  outputs: ['finished'],
  templateUrl: 'build/pages/workout/workout.html',
  selector: 'workout',
  providers: [Weight, Routine],
  directives: [ExercisePage]
})
export class WorkoutPage implements OnInit, AfterViewInit {
  reps: number = 5;
  week: number = 1;
  test: boolean = false;
  finished: boolean = false;
  exercises: Array<string>;

  constructor(private params: NavParams,
              private nav: NavController,
              private routine: Routine,
              private weight: Weight) {
      this.week = params.get('week');
  }

  ngOnInit(): void {

    if (this.week < 3) {
      this.reps = 10;

    } else if (this.week < 5) {
      this.reps = 8;

    } else if (this.week > 6) {
      this.test = true;
    }
  }

  ngAfterViewInit(): void {

    this.exercises = [
      'squat',
      'bench press',
      this.routine.BackExercise(this.week),
      'overhead press',
      this.routine.FirstIsolationExercise,
      this.routine.SecondIsolationExercise
    ];
  }

  exerciseFinished(event: {name: string, success: boolean}) {
    if (event) {
        if (!event.success) {
          this.weight.dropWeight(name, this.reps);
        }

        if (event.name === this.routine.SecondIsolationExercise) {
          this.nav.popToRoot();
        }
    }
  }

}
