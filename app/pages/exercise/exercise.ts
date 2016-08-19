import { Component, EventEmitter, OnInit, AfterViewInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Weight } from '../../providers/weight/weight';

@Component({
  inputs: ['name', 'reps', 'test'],
  outputs: ['success'],
  providers: [Weight],
  templateUrl: 'build/pages/exercise/exercise.html',
  selector: 'exercise'
})
export class ExercisePage implements OnInit, AfterViewInit {
  name: string = '';
  weight: number = 0;
  test: boolean;
  reps: number = 5;
  sets: Array<number>;
  rest: number = 120; 
  success: EventEmitter<{name: string, success: boolean}> = new EventEmitter<{name: string, success: boolean}>();
  hasFailed: boolean = false;

  constructor(private nav: NavController,
              private weightService: Weight) {

  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    this.weight = this.weightService.getWeight(this.name, this.reps);
    this.sets = [1, 2, 3];
  }

  successful(set: number = 0): void {
    this.cleanup(set);
  }

  failure(set: number = 0): void {
    this.hasFailed = true;

    this.cleanup(set);
  }

  cleanup(set: number = 0): void {
    
    for (let i = 0; i < this.sets.length; i++) {
      if (this.sets[i] === set) {
        this.sets.splice(i, 1);
      }
    }

    if (this.sets.length === 0) {
    this.success.emit({
      name: this.name,
      success: !this.hasFailed
    });

    }
  }

}
