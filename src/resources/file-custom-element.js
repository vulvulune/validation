import {inject} from 'aurelia-framework';
import {bindable} from 'aurelia-framework';
import {ExampleContext} from './example-context';

var extensionLanguageMap = {
  js: 'javascript',
  html: 'markup'
};

function getLanguage(filename) {
  var extension = (/\.(\w+)$/).exec(filename)[1].toLowerCase();
  return extensionLanguageMap[extension];
}

@inject(ExampleContext)
@bindable({ name : 'src', changedHandler : 'propertyChanged' })
@bindable({ name : 'view', changedHandler : 'propertyChanged' })
@bindable({ name : 'model', changedHandler : 'propertyChanged' })

export class FileCustomElement {

  constructor( context) {
    this.context = context;
    this.info = null;
  }

  attached(){
    this.propertyChanged();
  }
  propertyChanged() {
    var src = this.src, context = this.context, example = context.example;

    this.info = {
      name: src,
      moduleId: context.base + '/' + src.substr(0, src.indexOf('.')),
      language: getLanguage(src),
      url: 'src/' + context.base + '/' + src,
      repoUrl: context.githubBase + '/src/' + context.base + '/' + src
    };

    if (this.view === 'true')
      example.view = this.info;

    if (this.model === 'true')
      example.model = this.info;

    example.result = example.view && example.model;
  }
}
