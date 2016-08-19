import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {WorkoutPage} from '../workout/workout';

@Component({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor(public navCtrl: NavController) {

  }

  startWorkout(week: number): void {
    this.navCtrl.push(WorkoutPage, {
      week: week
    })
    .catch(reason => {
      console.log(reason);
    });
  }
}
