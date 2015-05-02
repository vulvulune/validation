System.register(['./example-context'], function (_export) {
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
    execute: function () {
      'use strict';
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7dUJBR2dCLFNBQVM7O0FBQWxCLFdBQVMsU0FBUyxDQUFDLE9BQU8sRUFBRTtBQUNqQyxXQUFPLENBQUMsU0FBUyxDQUFDLGdCQUFnQixDQUNoQyxjQUFjLEVBQ2QsSUFBSSxjQUFjLENBQUMscURBQXFELENBQUMsQ0FBQyxDQUFDO0FBQzdFLFdBQU8sQ0FBQyxrQkFBa0IsQ0FBQywyQkFBMkIsRUFBRSwyQkFBMkIsRUFBRSwwQkFBMEIsRUFBRSx5QkFBeUIsRUFBRSx1QkFBdUIsRUFBRSxnQ0FBZ0MsQ0FBQyxDQUFDO0dBQ3hNOzs7O3VDQVJPLGNBQWMiLCJmaWxlIjoicmVzb3VyY2VzL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=