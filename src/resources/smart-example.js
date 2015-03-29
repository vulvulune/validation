import {Behavior} from 'aurelia-framework';
import {ExampleContext} from './example-context';

export class SmartExample {
  static metadata(){
    return Behavior
      .customElement('smart-example')
      .withProperty('title', 'titleChanged')
      .withProperty('base', 'baseChanged');
  }

  static inject() { return [ExampleContext]; }
  constructor(context) { this.context = context;
    this.title = 'An example...';
    this.model = null;
    this.view = null;
    this.result = false;
  }
  titleChanged(newValue){ }

  baseChanged(newValue) {
    this.context.base = 'examples/' + newValue;
    this.context.example = this;
  }
}
