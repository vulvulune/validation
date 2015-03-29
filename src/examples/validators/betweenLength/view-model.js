import {Validation} from 'aurelia-validation';
export class Person {
  static inject() { return [Validation];}
  constructor(validation) {
    this.betweenLengthProperty = 'abc';

    this.validation = validation.on(this)
      .ensure('betweenLengthProperty').betweenLength(1,10);
  }
}
