import {Validation} from 'aurelia-validation';
export class Person {
  static inject() { return [Validation];}
  constructor(validation) {
    this.alphaNumericProperty = 'abc123';

    this.validation = validation.on(this)
      .ensure('alphaNumericProperty').containsOnlyAlphanumerics();
  }
}
