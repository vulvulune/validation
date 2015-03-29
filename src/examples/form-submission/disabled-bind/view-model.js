import {Validation} from 'aurelia-validation';
export class Person {
  static inject() { return [Validation];}
  constructor(validation) {
    this.firstName = 'John';
    this.validation = validation.on(this)
      .ensure('firstName')
        .notEmpty()
        .betweenLength(5,10);

    debugger;
    var isValid = this.validation.result.isValid;
    debugger;
  }
  welcome(){
      alert(`Welcome ${firstName}`);
  }
}
