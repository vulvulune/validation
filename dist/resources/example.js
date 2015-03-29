System.register(["aurelia-framework", "./example-context"], function (_export) {
  var Behavior, ExampleContext, _createClass, _classCallCheck, Example;

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

      Example = _export("Example", (function () {
        function Example(context) {
          _classCallCheck(this, Example);

          this.context = context;
          this.model = null;
          this.view = null;
          this.result = false;
        }

        _createClass(Example, {
          baseChanged: {
            value: function baseChanged(newValue) {
              this.context.base = newValue;
              this.context.example = this;
            }
          }
        }, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("example").withProperty("base", "baseChanged");
            }
          },
          inject: {
            value: function inject() {
              return [ExampleContext];
            }
          }
        });

        return Example;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInJlc291cmNlcy9leGFtcGxlLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFBUSxRQUFRLEVBQ1IsY0FBYyxpQ0FFVCxPQUFPOzs7O0FBSFosY0FBUSxxQkFBUixRQUFROztBQUNSLG9CQUFjLG1CQUFkLGNBQWM7Ozs7Ozs7OztBQUVULGFBQU87QUFRUCxpQkFSQSxPQUFPLENBUU4sT0FBTyxFQUFFO2dDQVJWLE9BQU87O0FBU2hCLGNBQUksQ0FBQyxPQUFPLEdBQUcsT0FBTyxDQUFDO0FBQ3ZCLGNBQUksQ0FBQyxLQUFLLEdBQUcsSUFBSSxDQUFDO0FBQ2xCLGNBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO0FBQ2pCLGNBQUksQ0FBQyxNQUFNLEdBQUcsS0FBSyxDQUFDO1NBQ3JCOztxQkFiVSxPQUFPO0FBZWxCLHFCQUFXO21CQUFBLHFCQUFDLFFBQVEsRUFBRTtBQUNwQixrQkFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLEdBQUcsUUFBUSxDQUFDO0FBQzdCLGtCQUFJLENBQUMsT0FBTyxDQUFDLE9BQU8sR0FBRyxJQUFJLENBQUM7YUFDN0I7OztBQWpCTSxrQkFBUTttQkFBQSxvQkFBRTtBQUNmLHFCQUFPLFFBQVEsQ0FDWixhQUFhLENBQUMsU0FBUyxDQUFDLENBQ3hCLFlBQVksQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUM7YUFDeEM7O0FBRU0sZ0JBQU07bUJBQUEsa0JBQUc7QUFBRSxxQkFBTyxDQUFDLGNBQWMsQ0FBQyxDQUFDO2FBQUU7Ozs7ZUFQakMsT0FBTyIsImZpbGUiOiJyZXNvdXJjZXMvZXhhbXBsZS5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9