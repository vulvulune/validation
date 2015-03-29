import {Validation} from 'aurelia-validation';
export class Person {
  static inject() { return [Validation];}
  constructor(validation) {
    this.allowedCustomerLevels = ['Silver', 'Gold', 'Platinum'];
    this.customer = {
      level : 'Gold',
      monthlyIncome : 10000
    };
    this.validation = validation.on(this)
      .ensure('customer.level')
        .notEmpty()
        .in(this.allowedCustomerLevels)
      .ensure('customer.monthlyIncome')
        .notEmpty()
        .isNumeric()
        .switch(() => { return this.customer.level})
          .case('Gold')
            .minimum(10000)
          .case('Platinum')
            .minimum(20000)
          .default()
            .minimum(5000)
        .endSwitch();
  }

  welcome(){
    if(this.validation.checkAll())
      alert('Welcome,new customer!');
  }
}
