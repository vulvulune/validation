import {bindable} from 'aurelia-framework';
import {inject} from 'aurelia-framework';
import {ExampleContext} from './example-context';

@inject(ExampleContext)
export class SmartExampleCustomElement {
  @bindable title = 'An excample...';
  @bindable base = null;
  @bindable model = null;
  @bindable view = null;
  @bindable result = false;


  constructor(context) {
    this.context = context;
  }
  titleChanged(newValue){ }

  baseChanged(newValue) {
    this.context.base = 'examples/' + newValue;
    this.context.example = this;
  }
  attached(){
    this.baseChanged(this.base);
  }
}
