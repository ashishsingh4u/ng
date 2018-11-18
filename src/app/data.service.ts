import { Injectable } from '@angular/core';
import * as Rx from 'rxjs';

@Injectable()

export class DataService {

  private goals = new Rx.BehaviorSubject<any>(['The initial goal', 'Another silly life goal']);
  goal = this.goals.asObservable();

  constructor() { }

  changeGoal(goal) {
    this.goals.next(goal);
  }
}
