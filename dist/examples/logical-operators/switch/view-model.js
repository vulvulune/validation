System.register(["aurelia-validation"], function (_export) {
  var Validation, _createClass, _classCallCheck, Person;

  return {
    setters: [function (_aureliaValidation) {
      Validation = _aureliaValidation.Validation;
    }],
    execute: function () {
      "use strict";

      _createClass = (function () { function defineProperties(target, props) { for (var key in props) { var prop = props[key]; prop.configurable = true; if (prop.value) prop.writable = true; } Object.defineProperties(target, props); } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      Person = _export("Person", (function () {
        function Person(validation) {
          var _this = this;

          _classCallCheck(this, Person);

          this.allowedCustomerLevels = ["Silver", "Gold", "Platinum"];
          this.customer = {
            level: "Gold",
            monthlyIncome: 10000
          };
          this.validation = validation.on(this).ensure("customer.level").notEmpty()["in"](this.allowedCustomerLevels).ensure("customer.monthlyIncome").notEmpty().isNumeric()["switch"](function () {
            return _this.customer.level;
          })["case"]("Gold").minimum(10000)["case"]("Platinum").minimum(20000)["default"]().minimum(5000).endSwitch();
        }

        _createClass(Person, {
          welcome: {
            value: function welcome() {
              this.validation.validate().then(function () {
                alert("Welcome,new customer!");
              });
            }
          }
        }, {
          inject: {
            value: function inject() {
              return [Validation];
            }
          }
        });

        return Person;
      })());
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzL2xvZ2ljYWwtb3BlcmF0b3JzL3N3aXRjaC92aWV3LW1vZGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFBUSxVQUFVLGlDQUNMLE1BQU07Ozs7QUFEWCxnQkFBVSxzQkFBVixVQUFVOzs7Ozs7Ozs7QUFDTCxZQUFNO0FBRU4saUJBRkEsTUFBTSxDQUVMLFVBQVUsRUFBRTs7O2dDQUZiLE1BQU07O0FBR2YsY0FBSSxDQUFDLHFCQUFxQixHQUFHLENBQUMsUUFBUSxFQUFFLE1BQU0sRUFBRSxVQUFVLENBQUMsQ0FBQztBQUM1RCxjQUFJLENBQUMsUUFBUSxHQUFHO0FBQ2QsaUJBQUssRUFBRyxNQUFNO0FBQ2QseUJBQWEsRUFBRyxLQUFLO1dBQ3RCLENBQUM7QUFDRixjQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQ2xDLE1BQU0sQ0FBQyxnQkFBZ0IsQ0FBQyxDQUN0QixRQUFRLEVBQUUsTUFDUixDQUFDLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxDQUNoQyxNQUFNLENBQUMsd0JBQXdCLENBQUMsQ0FDOUIsUUFBUSxFQUFFLENBQ1YsU0FBUyxFQUFFLFVBQ0wsQ0FBQyxZQUFNO0FBQUUsbUJBQU8sTUFBSyxRQUFRLENBQUMsS0FBSyxDQUFBO1dBQUMsQ0FBQyxRQUNyQyxDQUFDLE1BQU0sQ0FBQyxDQUNWLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFDWixDQUFDLFVBQVUsQ0FBQyxDQUNkLE9BQU8sQ0FBQyxLQUFLLENBQUMsV0FDVCxFQUFFLENBQ1AsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUNqQixTQUFTLEVBQUUsQ0FBQztTQUNsQjs7cUJBdkJVLE1BQU07QUF5QmpCLGlCQUFPO21CQUFBLG1CQUFFO0FBQ1Asa0JBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLENBQUMsSUFBSSxDQUM3QixZQUFNO0FBQ0oscUJBQUssQ0FBQyx1QkFBdUIsQ0FBQyxDQUFDO2VBQ2hDLENBQ0YsQ0FBQzthQUNIOzs7QUE5Qk0sZ0JBQU07bUJBQUEsa0JBQUc7QUFBRSxxQkFBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQUM7Ozs7ZUFENUIsTUFBTSIsImZpbGUiOiJleGFtcGxlcy9sb2dpY2FsLW9wZXJhdG9ycy9zd2l0Y2gvdmlldy1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9