import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import {ExercisePage} from '../exercise/exercise';

/*
  Generated class for the WorkoutPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  inputs: ['session'],
  templateUrl: 'build/pages/workout/workout.html',
  selector: 'workout',
  directives: [ExercisePage]
})
export class WorkoutPage implements OnInit {
  reps: number = 0;
  session: number = 0;

  constructor(private nav: NavController) {

  }

  ngOnInit(): void {

  }

  getWeight(exercise: string): number {
    return 0;
  }

}
