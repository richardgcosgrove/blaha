import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

/*
  Generated class for the ExercisePage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  inputs: ['name', 'weight', 'reps'],
  outputs: ['success'],
  templateUrl: 'build/pages/exercise/exercise.html',
  selector: 'exercise'
})
export class ExercisePage {
  name: string = '';
  weight: number = 0;
  reps: number = 0;
  sets: number = 3;
  rest: number = 120; 
  success: boolean = false;
  sucesses: Array<boolean> = [];

  constructor(private nav: NavController) {

  }

  successful(): void {
    this.success = true;
  }

  failure(): void {
    this.success = false;
  }

}
