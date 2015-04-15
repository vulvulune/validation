import {Validation} from 'aurelia-validation';
export class Person {
  static inject() { return [Validation];}
  constructor(validation) {
    this.digitProperty = '1337';

    this.validation = validation.on(this)
      .ensure('digitProperty').containsOnly(/^\d+$/);
  }
}
