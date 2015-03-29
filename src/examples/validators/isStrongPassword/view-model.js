import {Validation} from 'aurelia-validation';
export class Person {
  static inject() { return [Validation];}
  constructor(validation) {
    this.strongPasswordProperty = 'Abc*12345';
    this.mediumPasswordProperty = 'abc*12345';
    this.weakPasswordProperty = 'abcde12345';

    this.validation = validation.on(this)
      .ensure('strongPasswordProperty').isStrongPassword() //default 4
      .ensure('mediumPasswordProperty').isStrongPassword(3)
      .ensure('weakPasswordProperty').isStrongPassword(2);
  }
}
