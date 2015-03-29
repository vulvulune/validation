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
          this.title = "An example...";
          this.model = null;
          this.view = null;
          this.result = false;
        }

        _createClass(SmartExample, {
          titleChanged: {
            value: function titleChanged(newValue) {}
          },
          baseChanged: {
            value: function baseChanged(newValue) {
              this.context.base = "examples/" + newValue;
              this.context.example = this;
            }
          }
        }, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("smart-example").withProperty("title", "titleChanged").withProperty("base", "baseChanged");
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9zbWFydC1leGFtcGxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFBUSxRQUFRLEVBQ1IsY0FBYyxpQ0FFVCxZQUFZOzs7O0FBSGpCLGNBQVEscUJBQVIsUUFBUTs7QUFDUixvQkFBYyxtQkFBZCxjQUFjOzs7Ozs7Ozs7QUFFVCxrQkFBWTtBQVNaLGlCQVRBLFlBQVksQ0FTWCxPQUFPLEVBQUU7Z0NBVFYsWUFBWTs7QUFTQSxjQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztBQUM1QyxjQUFJLENBQUMsS0FBSyxHQUFHLGVBQWUsQ0FBQztBQUM3QixjQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQztBQUNsQixjQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQztBQUNqQixjQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztTQUNyQjs7cUJBZFUsWUFBWTtBQWV2QixzQkFBWTttQkFBQSxzQkFBQyxRQUFRLEVBQUMsRUFBRzs7QUFFekIscUJBQVc7bUJBQUEscUJBQUMsUUFBUSxFQUFFO0FBQ3BCLGtCQUFJLENBQUMsT0FBTyxDQUFDLElBQUksR0FBRyxXQUFXLEdBQUcsUUFBUSxDQUFDO0FBQzNDLGtCQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7YUFDN0I7OztBQW5CTSxrQkFBUTttQkFBQSxvQkFBRTtBQUNmLHFCQUFPLFFBQVEsQ0FDWixhQUFhLENBQUMsZUFBZSxDQUFDLENBQzlCLFlBQVksQ0FBQyxPQUFPLEVBQUUsY0FBYyxDQUFDLENBQ3JDLFlBQVksQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUM7YUFDeEM7O0FBRU0sZ0JBQU07bUJBQUEsa0JBQUc7QUFBRSxxQkFBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQUU7Ozs7ZUFSakMsWUFBWSIsImZpbGUiOiJyZXNvdXJjZXMvc21hcnQtZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9