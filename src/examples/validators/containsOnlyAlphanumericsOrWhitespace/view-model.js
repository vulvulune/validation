import {Validation} from 'aurelia-validation';
export class Person {
  static inject() { return [Validation];}
  constructor(validation) {
    this.alphaNumericOrWhitespaceProperty = 'abc 123';

    this.validation = validation.on(this)
      .ensure('alphaNumericOrWhitespaceProperty').containsOnlyAlphanumericsOrWhitespace();
  }
}
