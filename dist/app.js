System.register(["aurelia-router", "bootstrap", "./table-of-contents"], function (_export) {
  var Router, bootstrap, TableOfContents, _createClass, _classCallCheck, App;

  return {
    setters: [function (_aureliaRouter) {
      Router = _aureliaRouter.Router;
    }, function (_bootstrap) {
      bootstrap = _bootstrap["default"];
    }, function (_tableOfContents) {
      TableOfContents = _tableOfContents.TableOfContents;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      App = _export("App", (function () {
        function App(router, tableOfContents) {
          _classCallCheck(this, App);

          this.router = router;
          this.router.configure(function (config) {
            config.title = "Aurelia Validation";
            config.map(tableOfContents.createRoutes());
            config.mapUnknownRoutes(function (instruction) {
              var example = instruction.fragment.toLowerCase();
              instruction.config.moduleId = example;
            });
          });
          this.iframe = this.inIframe();
        }

        _createClass(App, {
          inIframe: {
            value: function inIframe() {
              try {
                return window.self !== window.top;
              } catch (e) {
                return true;
              }
            }
          }
        }, {
          inject: {
            value: function inject() {
              return [Router, TableOfContents];
            }
          }
        });

        return App;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQVEsTUFBTSxFQUNQLFNBQVMsRUFDUixlQUFlLGlDQUVWLEdBQUc7Ozs7QUFKUixZQUFNLGtCQUFOLE1BQU07O0FBQ1AsZUFBUzs7QUFDUixxQkFBZSxvQkFBZixlQUFlOzs7Ozs7Ozs7QUFFVixTQUFHO0FBRUgsaUJBRkEsR0FBRyxDQUVGLE1BQU0sRUFBRSxlQUFlLEVBQUU7Z0NBRjFCLEdBQUc7O0FBR1osY0FBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7QUFDckIsY0FBSSxDQUFDLE1BQU0sQ0FBQyxTQUFTLENBQUMsVUFBQSxNQUFNLEVBQUk7QUFDOUIsa0JBQU0sQ0FBQyxLQUFLLEdBQUcsb0JBQW9CLENBQUM7QUFDcEMsa0JBQU0sQ0FBQyxHQUFHLENBQ1IsZUFBZSxDQUFDLFlBQVksRUFBRSxDQUMvQixDQUFDO0FBQ0Ysa0JBQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxVQUFBLFdBQVcsRUFBSTtBQUNyQyxrQkFBSSxPQUFPLEdBQUcsV0FBVyxDQUFDLFFBQVEsQ0FBQyxXQUFXLEVBQUUsQ0FBQztBQUNqRCx5QkFBVyxDQUFDLE1BQU0sQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO2FBQ3ZDLENBQUMsQ0FBQztXQUNKLENBQUMsQ0FBQztBQUNILGNBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLFFBQVEsRUFBRSxDQUFDO1NBQy9COztxQkFmVSxHQUFHO0FBaUJkLGtCQUFRO21CQUFDLG9CQUFHO0FBQ1Ysa0JBQUk7QUFDRix1QkFBTyxNQUFNLENBQUMsSUFBSSxLQUFLLE1BQU0sQ0FBQyxHQUFHLENBQUM7ZUFDbkMsQ0FBQyxPQUFPLENBQUMsRUFBRTtBQUNWLHVCQUFPLElBQUksQ0FBQztlQUNiO2FBQ0Y7OztBQXRCTSxnQkFBTTttQkFBQSxrQkFBRztBQUFFLHFCQUFPLENBQUMsTUFBTSxFQUFFLGVBQWUsQ0FBQyxDQUFDO2FBQUU7Ozs7ZUFEMUMsR0FBRyIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==