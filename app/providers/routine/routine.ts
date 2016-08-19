import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Routine provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Routine {
  private _backExercise: string = 'deadlift';
  private _firstIsolationExercise: string = 'side laterals';
  private _secondIsolationExercise: string = 'curls';
  private _count: number = 0;
  private _cycle: number = 0;
  private _nextWorkout: Date = new Date();

  constructor() {
  }

  public BackExercise(week: number = 0, count?: number): string {
    const isDeadlift: boolean = 
    (this.calculateSession(this.Cycle, week, count || this.Count) % 2) === 0;

    if (isDeadlift) {
      return 'deadlift';
    } else {
      return 'barbell row';
    }
  }

  private calculateSession(cycle: number = 0, week: number = 0, count: number = 0): number {
    return cycle * 21 + week * 3 + count;
  }

  get Count(): number {
    return this._count;
  }

  set Count(value: number) {
    this._count = value;
  }

  get Cycle(): number {
    return this._cycle;
  }

  set Cycle(value: number) {
    this._cycle = value;
  }



  get FirstIsolationExercise(): string {
    return this._firstIsolationExercise;
  }

  set FirstIsolationExercise(value: string) {
    this._firstIsolationExercise = value;
    this.updateStorage('first', value);
  }

  get SecondIsolationExercise(): string {
    return this._secondIsolationExercise;
  }

  set SecondIsolationExercise(value: string) {
    this._secondIsolationExercise = value;
    this.updateStorage('second', value);
    
  }

  private updateStorage(key: string, value: string) {

  }
}

