import {Validation} from 'aurelia-validation';
export class Person {
  static inject() { return [Validation];}
  constructor(validation) {
    this.alphaNumericOrWhitespaceProperty = 'abc';

    this.validation = validation.on(this)
      .ensure('alphaNumericOrWhitespaceProperty').containsOnlyAlpha();
  }
}
