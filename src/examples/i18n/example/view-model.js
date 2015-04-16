import {Validation} from 'aurelia-validation';
import {ValidationConfig} from 'aurelia-validation';

export class Person {
  static inject() { return [Validation, ValidationConfig];}
  constructor(validation, validationConfig) {
    this.globalValidationConfig = validationConfig;
    this.supportedLocales = ['de-DE', 'en-US', 'es-MX', 'fr-FR', 'nl-BE', 'nl-NL', 'sv-SV', 'tr-TR'];
    this.firstName = 'John';
    this.income = '56,300.00';

    this.validation = validation.on(this)
      .ensure('firstName').isNotEmpty().hasLengthBetween(5, 10)
      .ensure('income').isNotEmpty().isNumber();

    setTimeout( () => { this.validation.validate(); },1500);
    // /Demo: trigger validation from the start
  }

  get currentLocale(){
    return this.globalValidationConfig.getValue('locale');
  }
  set currentLocale(value){
    this.globalValidationConfig.useLocale(value);
  }
}
