import {Validation} from 'aurelia-validation';
export class Person {
  static inject() { return [Validation];}
  constructor(validation) {
    this.equalsProperty = '1337';

    this.validation = validation.on(this)
      .ensure('equalsProperty').equals('1337', 'LEET');
  }
}
