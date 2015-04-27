import {Validation} from 'aurelia-validation';
import {ensure} from 'aurelia-validation';

export class Person {
  static inject() { return [Validation];}

  @ensure(function(it){ it.isNotEmpty().hasLengthBetween(3,10) })
    firstName = 'John';

  constructor(validation) {
    this.validation = validation.on(this);
  }
}

