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
          this.validation = validation.on(this).ensure("customer.level").notEmpty()["in"](this.allowedCustomerLevels).ensure("customer.monthlyIncome").notEmpty().isNumeric()["if"](function () {
            return _this.customer.level === "Silver";
          }).minimum(5000)["else"]()["if"](function () {
            return _this.customer.level === "Gold";
          }).minimum(10000)["else"]().minimum(20000).endIf().endIf();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzL2xvZ2ljYWwtb3BlcmF0b3JzL2lmL3ZpZXctbW9kZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUFRLFVBQVUsaUNBQ0wsTUFBTTs7OztBQURYLGdCQUFVLHNCQUFWLFVBQVU7Ozs7Ozs7OztBQUNMLFlBQU07QUFFTixpQkFGQSxNQUFNLENBRUwsVUFBVSxFQUFFOzs7Z0NBRmIsTUFBTTs7QUFHZixjQUFJLENBQUMscUJBQXFCLEdBQUcsQ0FBQyxRQUFRLEVBQUUsTUFBTSxFQUFFLFVBQVUsQ0FBQyxDQUFDO0FBQzVELGNBQUksQ0FBQyxRQUFRLEdBQUc7QUFDZCxpQkFBSyxFQUFHLE1BQU07QUFDZCx5QkFBYSxFQUFHLEtBQUs7V0FDdEIsQ0FBQztBQUNGLGNBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FDbEMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQ3RCLFFBQVEsRUFBRSxNQUNSLENBQUMsSUFBSSxDQUFDLHFCQUFxQixDQUFDLENBQ2hDLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxDQUM5QixRQUFRLEVBQUUsQ0FDVixTQUFTLEVBQUUsTUFDVCxDQUFDLFlBQU07QUFBRSxtQkFBTyxNQUFLLFFBQVEsQ0FBQyxLQUFLLEtBQUssUUFBUSxDQUFBO1dBQUMsQ0FBQyxDQUNsRCxPQUFPLENBQUMsSUFBSSxDQUFDLFFBQ1gsRUFBRSxNQUNGLENBQUMsWUFBTTtBQUFDLG1CQUFPLE1BQUssUUFBUSxDQUFDLEtBQUssS0FBSyxNQUFNLENBQUE7V0FBQyxDQUFDLENBQy9DLE9BQU8sQ0FBQyxLQUFLLENBQUMsUUFDWixFQUFFLENBQ0osT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUNoQixLQUFLLEVBQUUsQ0FDVCxLQUFLLEVBQUUsQ0FBQztTQUNkOztxQkF4QlUsTUFBTTtBQTBCakIsaUJBQU87bUJBQUEsbUJBQUU7QUFDUCxrQkFBSSxDQUFDLFVBQVUsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxJQUFJLENBQzdCLFlBQU07QUFDSixxQkFBSyxDQUFDLHVCQUF1QixDQUFDLENBQUM7ZUFDaEMsQ0FDRixDQUFDO2FBQ0g7OztBQS9CTSxnQkFBTTttQkFBQSxrQkFBRztBQUFFLHFCQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7YUFBQzs7OztlQUQ1QixNQUFNIiwiZmlsZSI6ImV4YW1wbGVzL2xvZ2ljYWwtb3BlcmF0b3JzL2lmL3ZpZXctbW9kZWwuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==