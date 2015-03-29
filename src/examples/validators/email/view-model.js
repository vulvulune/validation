import {Validation} from 'aurelia-validation';
export class Person {
  static inject() { return [Validation];}
  constructor(validation) {
    this.emailProperty = 'john@doe.com';

    this.validation = validation.on(this)
      .ensure('emailProperty').email();
  }
}
