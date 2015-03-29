import {Behavior} from 'aurelia-framework';
import {ExampleContext} from './example-context';

export class SmartExample {
  static metadata(){
    return Behavior
      .customElement('smart-example')
      .withProperty('base', 'baseChanged');
  }

  static inject() { return [ExampleContext]; }
  constructor(context) { this.context = context;
    this.model = null;
    this.view = null;
    this.result = false;
  }

  baseChanged(newValue) {
    this.context.base = 'examples/' + newValue;
    this.context.example = this;
  }
}
