import {Validation} from 'aurelia-validation';
export class Person {
  static inject() { return [Validation];}
  constructor(validation) {
    this.notEqualsProperty = '1337';

    this.validation = validation.on(this)
      .ensure('notEqualsProperty').notEquals('1337', 'LEET');
  }
}
