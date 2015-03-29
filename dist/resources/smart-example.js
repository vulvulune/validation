System.register(["aurelia-framework", "./example-context"], function (_export) {
  var Behavior, ExampleContext, _createClass, _classCallCheck, SmartExample;

  return {
    setters: [function (_aureliaFramework) {
      Behavior = _aureliaFramework.Behavior;
    }, function (_exampleContext) {
      ExampleContext = _exampleContext.ExampleContext;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      SmartExample = _export("SmartExample", (function () {
        function SmartExample(context) {
          _classCallCheck(this, SmartExample);

          this.context = context;
          this.model = null;
          this.view = null;
          this.result = false;
        }

        _createClass(SmartExample, {
          baseChanged: {
            value: function baseChanged(newValue) {
              this.context.base = "examples/" + newValue;
              this.context.example = this;
            }
          }
        }, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("smart-example").withProperty("base", "baseChanged");
            }
          },
          inject: {
            value: function inject() {
              return [ExampleContext];
            }
          }
        });

        return SmartExample;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9zbWFydC1leGFtcGxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFBUSxRQUFRLEVBQ1IsY0FBYyxpQ0FFVCxZQUFZOzs7O0FBSGpCLGNBQVEscUJBQVIsUUFBUTs7QUFDUixvQkFBYyxtQkFBZCxjQUFjOzs7Ozs7Ozs7QUFFVCxrQkFBWTtBQVFaLGlCQVJBLFlBQVksQ0FRWCxPQUFPLEVBQUU7Z0NBUlYsWUFBWTs7QUFRQSxjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUM1QyxjQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztBQUNsQixjQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixjQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNyQjs7cUJBWlUsWUFBWTtBQWN2QixxQkFBVzttQkFBQSxxQkFBQyxRQUFRLEVBQUU7QUFDcEIsa0JBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxHQUFHLFdBQVcsR0FBRyxRQUFRLENBQUM7QUFDM0Msa0JBQUksQ0FBQyxPQUFPLENBQUMsT0FBTyxHQUFHLElBQUksQ0FBQzthQUM3Qjs7O0FBaEJNLGtCQUFRO21CQUFBLG9CQUFFO0FBQ2YscUJBQU8sUUFBUSxDQUNaLGFBQWEsQ0FBQyxlQUFlLENBQUMsQ0FDOUIsWUFBWSxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQzthQUN4Qzs7QUFFTSxnQkFBTTttQkFBQSxrQkFBRztBQUFFLHFCQUFPLENBQUMsY0FBYyxDQUFDLENBQUM7YUFBRTs7OztlQVBqQyxZQUFZIiwiZmlsZSI6InJlc291cmNlcy9zbWFydC1leGFtcGxlLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=