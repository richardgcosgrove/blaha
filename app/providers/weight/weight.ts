import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the Data provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class Weight {

  constructor() {
  }

  getWeight(name: string, reps: number): number {
    return Math.random() * 800;
  }

  dropWeight(name: string, reps: number): void {
  }
}

