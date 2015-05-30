import {Validation} from 'aurelia-validation';
export class Person {
  static inject() { return [Validation];}
  constructor(validation) {
    this.urlProperty = 'http://aurelia.io';

    this.validation = validation.on(this)
      .ensure('urlProperty').isURL();
  }
}
