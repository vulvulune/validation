import {Validation} from 'aurelia-validation';
export class Person {
  static inject() { return [Validation];}
  constructor(validation) {
    this.matchesProperty = '333-22-4444';

    this.validation = validation.on(this)
      .ensure('matchesProperty').matches(/^\d{3}-\d{2}-\d{4}$/);
  }
}
