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
        .if(() => { return this.customer.level === 'Silver'})
          .minimum(5000)
        .else()
          .if(() => {return this.customer.level === 'Gold'})
            .minimum(10000)
          .else()
            .minimum(20000)
          .endIf()
        .endIf();
  }

  welcome(){
    if(this.validation.checkAll())
      alert('Welcome,new customer!');
  }
}
