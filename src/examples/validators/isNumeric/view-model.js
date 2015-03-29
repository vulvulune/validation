import {Validation} from 'aurelia-validation';
export class Person {
  static inject() { return [Validation];}
  constructor(validation) {
    this.numericProperty = -5,000.123;

    this.validation = validation.on(this)
        .ensure('numericProperty').isNumeric();
  }
}
