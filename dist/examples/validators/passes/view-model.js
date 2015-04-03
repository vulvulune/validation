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
          _classCallCheck(this, Person);

          this.passesProperty = "333-22-4444";

          this.userNameProperty = "";

          this.validation = validation.on(this).ensure("passesProperty").passes(function (newValue) {
            return /^\d{3}-\d{2}-\d{4}$/.test(newValue);
          }).withMessage("Not a valid SSN").ensure("userNameProperty").passes(function (newValue) {
            //Simulate delay "due to service call"
            return new Promise(function (accept, reject) {
              setTimeout(function () {
                reject("username already taken");
              }, 1500);
            });
          });
        }

        _createClass(Person, null, {
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzL3ZhbGlkYXRvcnMvcGFzc2VzL3ZpZXctbW9kZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUFRLFVBQVUsaUNBQ0wsTUFBTTs7OztBQURYLGdCQUFVLHNCQUFWLFVBQVU7Ozs7Ozs7OztBQUNMLFlBQU07QUFFTixpQkFGQSxNQUFNLENBRUwsVUFBVSxFQUFFO2dDQUZiLE1BQU07O0FBR2YsY0FBSSxDQUFDLGNBQWMsR0FBRyxhQUFhLENBQUM7O0FBRXBDLGNBQUksQ0FBQyxnQkFBZ0IsR0FBRyxFQUFFLENBQUM7O0FBRTNCLGNBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FDbEMsTUFBTSxDQUFDLGdCQUFnQixDQUFDLENBQ3RCLE1BQU0sQ0FBQyxVQUFDLFFBQVEsRUFBSztBQUFFLG1CQUFPLHFCQUFxQixDQUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztXQUFFLENBQUMsQ0FDdEUsV0FBVyxDQUFDLGlCQUFpQixDQUFDLENBQ2hDLE1BQU0sQ0FBQyxrQkFBa0IsQ0FBQyxDQUN4QixNQUFNLENBQ0wsVUFBQyxRQUFRLEVBQUs7O0FBRVosbUJBQU8sSUFBSSxPQUFPLENBQUUsVUFBQyxNQUFNLEVBQUUsTUFBTSxFQUFLO0FBQ3RDLHdCQUFVLENBQUMsWUFBSztBQUNkLHNCQUFNLENBQUMsd0JBQXdCLENBQUMsQ0FBQztlQUNsQyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ1YsQ0FBQyxDQUFDO1dBQ0osQ0FDRixDQUFDO1NBQ1A7O3FCQXRCVSxNQUFNO0FBQ1YsZ0JBQU07bUJBQUEsa0JBQUc7QUFBRSxxQkFBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQUM7Ozs7ZUFENUIsTUFBTSIsImZpbGUiOiJleGFtcGxlcy92YWxpZGF0b3JzL3Bhc3Nlcy92aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=