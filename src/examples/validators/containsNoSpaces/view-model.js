import {Validation} from 'aurelia-validation';
export class Person {
  static inject() { return [Validation];}
  constructor(validation) {
    this.noSpacesProperty = 'abc';

    this.validation = validation.on(this)
      .ensure('noSpacesProperty').containsNoSpaces();
  }
}
