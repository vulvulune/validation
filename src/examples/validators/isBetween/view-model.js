import {Validation} from 'aurelia-validation';
export class Person {
  static inject() { return [Validation];}
  constructor(validation) {
    this.betweenProperty = 4;

    this.validation = validation.on(this)
      .ensure('betweenProperty').isBetween(1,10);
  }
}
