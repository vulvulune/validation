import {Validation} from 'aurelia-validation';
export class Person {
  static inject() { return [Validation];}
  constructor(validation) {
    this.minLengthProperty = 'John';

    this.validation = validation.on(this)
      .ensure('minLengthProperty').hasMinLength(3);
  }
}
