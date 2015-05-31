import {Validation} from 'aurelia-validation';
import {ensure} from 'aurelia-validation';
import {inject} from 'aurelia-framework';

@inject(Validation)
export class RegisterViewModel {
  @ensure(function(it){ it.isNotEmpty().hasLengthBetween(3,10) })
    name = '';
  @ensure(function(it){ it.isNotEmpty().isEmail() })
    email = '';

  constructor(validation) {
    this.validation = validation.on(this);
  }

  register(){
    //check if the validation is valid before performing the register
    this.validation.validate().then( () => {
      alert('Welcome!'); //Your more meaningful stuff would go here
    });
  }
}
