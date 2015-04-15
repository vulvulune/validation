System.register([], function (_export) {
  _export('configure', configure);

  function configure(aurelia) {
    aurelia.use.standardConfiguration().developmentLogging().plugin('./resources/index').plugin('aurelia-validation');

    aurelia.start().then(function (a) {
      return a.setRoot('app', document.body);
    });
  }

  return {
    setters: [],
    execute: function () {
      'use strict';
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijt1QkFBZ0IsU0FBUzs7QUFBbEIsV0FBUyxTQUFTLENBQUMsT0FBTyxFQUFFO0FBQ2pDLFdBQU8sQ0FBQyxHQUFHLENBQ1IscUJBQXFCLEVBQUUsQ0FDdkIsa0JBQWtCLEVBQUUsQ0FDcEIsTUFBTSxDQUFDLG1CQUFtQixDQUFDLENBQzNCLE1BQU0sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDOztBQUtoQyxXQUFPLENBQUMsS0FBSyxFQUFFLENBQUMsSUFBSSxDQUFDLFVBQUEsQ0FBQzthQUFJLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLFFBQVEsQ0FBQyxJQUFJLENBQUM7S0FBQSxDQUFDLENBQUM7R0FDNUQiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9