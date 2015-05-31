System.register(['./example-context'], function (_export) {
  'use strict';

  var ExampleContext;

  _export('configure', configure);

  function configure(aurelia) {
    aurelia.container.registerInstance(ExampleContext, new ExampleContext('https://github.com/aurelia/validation/blob/gh-pages'));
    aurelia.globalizeResources('./markdown-custom-element', './source-custom-attribute', './example-custom-element', './column-custom-element', './file-custom-element', './smart-example-custom-element');
  }

  return {
    setters: [function (_exampleContext) {
      ExampleContext = _exampleContext.ExampleContext;
    }],
    execute: function () {}
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozt1QkFHZ0IsU0FBUzs7QUFBbEIsV0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFO0FBQ2pDLFdBQU8sQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQ2hDLGNBQWMsRUFDZCxJQUFJLGNBQWMsQ0FBQyxxREFBcUQsQ0FBQyxDQUFDLENBQUM7QUFDN0UsV0FBTyxDQUFDLGtCQUFrQixDQUFDLDJCQUEyQixFQUFFLDJCQUEyQixFQUFFLDBCQUEwQixFQUFFLHlCQUF5QixFQUFFLHVCQUF1QixFQUFFLGdDQUFnQyxDQUFDLENBQUM7R0FDeE07Ozs7dUNBUk8sY0FBYyIsImZpbGUiOiJyZXNvdXJjZXMvaW5kZXguanMiLCJzb3VyY2VSb290IjoiLi4vc3JjLyJ9