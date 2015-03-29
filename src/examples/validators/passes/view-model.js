import {Validation} from 'aurelia-validation';
export class Person {
  static inject() { return [Validation];}
  constructor(validation) {
    this.passesProperty = '333-22-4444';

    this.validation = validation.on(this)
      .ensure('passesProperty')
        .passes((newValue) => { return /^\d{3}-\d{2}-\d{4}$/.test(newValue); })
        .withMessage("Not a valid SSN");
  }
}
