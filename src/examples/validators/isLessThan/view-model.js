import {Validation} from 'aurelia-validation';
export class Person {
  static inject() { return [Validation];}
  constructor(validation) {
    this.maxProperty = 1337;

    this.validation = validation.on(this)
      .ensure('maxProperty').isLessThan(1337);
  }
}
