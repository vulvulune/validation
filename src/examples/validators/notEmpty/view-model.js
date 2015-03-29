import {Validation} from 'aurelia-validation';
export class Person {
  static inject() { return [Validation];}
  constructor(validation) {
    this.firstName = 'John';
    this.lastName = 'Doe';

    this.validation = validation.on(this)
      .ensure('firstName')
        .notEmpty()
        .betweenLength(3,10)
      .ensure('lastName')
        .betweenLength(3,30);
  }
}
