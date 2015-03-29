import {Validation} from 'aurelia-validation';
export class Person {
  static inject() { return [Validation];}
  constructor(validation) {
    this.maxLengthProperty = 'John Doe';

    this.validation = validation.on(this)
      .ensure('maxLengthProperty').maxLength(10);
  }
}
