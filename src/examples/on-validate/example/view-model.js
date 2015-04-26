import {Validation} from 'aurelia-validation';
export class Person {
  static inject() { return [Validation];}
  constructor(validation) {
    this.firstName = 'John';
    this.lastName = 'Doe';

    this.validation = validation.on(this)
      .ensure('firstName')
        .isNotEmpty()
        .hasLengthBetween(3,10)
      .ensure('lastName')
        .isNotEmpty()
        .hasLengthBetween(3,30)
      .onValidate( () => {
        return new Promise( (fulfil) => {
          setTimeout(() => {
             fulfil({
               firstName : 'Already taken',
               lastName : false
             })
          }, 3000);
        });
      },(onValidateError)=>{ alert('Please try again later')});
  }
  welcome(){
    this.validation.validate().then(
      () => {
        alert(`Welcome ${this.firstName}`);
      }
    );
  }
  resetValidation()
  {
    this.validation.result.clear();
  }
}
