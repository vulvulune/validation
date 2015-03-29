import {Validation} from 'aurelia-validation';
export class Person {
  static inject() { return [Validation];}
  constructor(validation) {
    this.betweenProperty = 4;
    this.matchesRegexProperty = '333-22-4444';

    this.validation = validation.on(this)
      .ensure('matchesRegexProperty').matchesRegex('^\d{3}-\d{2}-\d{4}$');
  }
}
