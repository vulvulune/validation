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
        .isNotEmpty()
        .isIn(this.allowedCustomerLevels)
      .ensure('customer.monthlyIncome', (config) => {config.computedFrom(['customer.level'])})
        .isNotEmpty()
        .isNumber()
        .if(() => { return this.customer.level === 'Silver'})
          .isGreaterThan(5000)
        .else()
          .if(() => {return this.customer.level === 'Gold'})
            .isGreaterThan(10000)
          .else()
            .isGreaterThan(20000)
          .endIf()
        .endIf();
  }
}
