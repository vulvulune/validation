import {Validation} from 'aurelia-validation';
export class Person {
  static inject() { return [Validation];}
  constructor(validation) {
    this.minimumProperty = 1000;

    this.validation = validation.on(this)
      .ensure('minimumProperty').minimum(1000);
  }
}
