import {Validation} from 'aurelia-validation';
export class Person {
  static inject() { return [Validation];}
  constructor(validation) {
    this.inProperty = 'Gold';

    this.validation = validation.on(this)
      .ensure('inProperty').isIn(['Gold','Silver', 'Platinum']);
  }
}
