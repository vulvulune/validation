import {ExampleContext} from './example-context';


export function install(aurelia) {
  aurelia.container.registerInstance(
    ExampleContext,
    new ExampleContext('https://github.com/aurelia/validation/blob/gh-pages'));
  aurelia.globalizeResources('./markdown', './source', './example', './column', './file', './smart-example');
}
