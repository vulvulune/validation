System.register(['aurelia-router', 'bootstrap', './table-of-contents'], function (_export) {
  var Router, bootstrap, TableOfContents, _classCallCheck, _createClass, App;

  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function (_bootstrap) {
      bootstrap = _bootstrap['default'];
    }, function (_tableOfContents) {
      TableOfContents = _tableOfContents.TableOfContents;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      App = (function () {
        function App(router, tableOfContents) {
          _classCallCheck(this, App);

          this.router = router;
          this.router.configure(function (config) {
            config.title = 'Aurelia Validation';
            config.map(tableOfContents.createRoutes());
            config.mapUnknownRoutes(function (instruction) {
              var example = instruction.fragment.toLowerCase();
              instruction.config.moduleId = example;
            });
          });
          this.iframe = this.inIframe();
        }

        _createClass(App, [{
          key: 'inIframe',
          value: function inIframe() {
            try {
              return window.self !== window.top;
            } catch (e) {
              return true;
            }
          }
        }], [{
          key: 'inject',
          value: function inject() {
            return [Router, TableOfContents];
          }
        }]);

        return App;
      })();

      _export('App', App);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO3lFQUlhLEdBQUc7Ozs7OEJBSlIsTUFBTTs7Ozt5Q0FFTixlQUFlOzs7Ozs7Ozs7QUFFVixTQUFHO0FBRUgsaUJBRkEsR0FBRyxDQUVGLE1BQU0sRUFBRSxlQUFlLEVBQUU7Z0NBRjFCLEdBQUc7O0FBR1osY0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsY0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNLEVBQUk7QUFDOUIsa0JBQU0sQ0FBQyxLQUFLLEdBQUcsb0JBQW9CLENBQUM7QUFDcEMsa0JBQU0sQ0FBQyxHQUFHLENBQ1IsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUMvQixDQUFDO0FBQ0Ysa0JBQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFBLFdBQVcsRUFBSTtBQUNyQyxrQkFBSSxPQUFPLEdBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNqRCx5QkFBVyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO2FBQ3ZDLENBQUMsQ0FBQztXQUNKLENBQUMsQ0FBQztBQUNILGNBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQy9COztxQkFmVSxHQUFHOztpQkFpQkwsb0JBQUc7QUFDVixnQkFBSTtBQUNGLHFCQUFPLE1BQU0sQ0FBQyxJQUFJLEtBQUssTUFBTSxDQUFDLEdBQUcsQ0FBQzthQUNuQyxDQUFDLE9BQU8sQ0FBQyxFQUFFO0FBQ1YscUJBQU8sSUFBSSxDQUFDO2FBQ2I7V0FDRjs7O2lCQXRCWSxrQkFBRztBQUFFLG1CQUFPLENBQUMsTUFBTSxFQUFFLGVBQWUsQ0FBQyxDQUFDO1dBQUU7OztlQUQxQyxHQUFHOzs7cUJBQUgsR0FBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==