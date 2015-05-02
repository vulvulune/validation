import {bindable} from 'aurelia-framework';
import {inject} from 'aurelia-framework';
import {ExampleContext} from './example-context';

@inject(ExampleContext)
export class SmartExampleCustomElement {
  @bindable title;
  @bindable model;
  @bindable view;
  @bindable base;

  constructor(context) {
    this.context = context;
    this.base = null;
    this.model = null;
    this.view = null;
    this.title  = 'An excample...';
    this.hasResult = false;
  }
  titleChanged(newValue){
    debugger;
  }

  baseChanged(newValue) {
    this.context.base = 'examples/' + newValue;
    this.context.example = this;
  }
  attached(){
    this.baseChanged(this.base);
  }
  complete()
  {
    this.hasResult = true;
  }
}
