System.register(["./example-context"], function (_export) {
  var ExampleContext;

  _export("install", install);

  function install(aurelia) {
    aurelia.container.registerInstance(ExampleContext, new ExampleContext("https://github.com/aurelia/validation/blob/gh-pages"));
    aurelia.globalizeResources("./markdown", "./source", "./example", "./column", "./file", "./smart-example");
  }

  return {
    setters: [function (_exampleContext) {
      ExampleContext = _exampleContext.ExampleContext;
    }],
    execute: function () {
      "use strict";
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9pbmRleC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQVEsY0FBYzs7cUJBR04sT0FBTzs7QUFBaEIsV0FBUyxPQUFPLENBQUMsT0FBTyxFQUFFO0FBQy9CLFdBQU8sQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQ2hDLGNBQWMsRUFDZCxJQUFJLGNBQWMsQ0FBQyxxREFBcUQsQ0FBQyxDQUFDLENBQUM7QUFDN0UsV0FBTyxDQUFDLGtCQUFrQixDQUFDLFlBQVksRUFBRSxVQUFVLEVBQUUsV0FBVyxFQUFFLFVBQVUsRUFBRSxRQUFRLEVBQUUsaUJBQWlCLENBQUMsQ0FBQztHQUM1Rzs7OztBQVJPLG9CQUFjLG1CQUFkLGNBQWMiLCJmaWxlIjoicmVzb3VyY2VzL2luZGV4LmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=