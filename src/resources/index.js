import {ExampleContext} from './example-context';


export function install(aurelia) {
  aurelia.container.registerInstance(
    ExampleContext,
    new ExampleContext('https://github.com/aurelia/validation/blob/gh-pages'));
  aurelia.globalizeResources('./markdown-custom-element', './source-custom-attribute', './example-custom-element', './column-custom-element', './file-custom-element', './smart-example-custom-element');
}
