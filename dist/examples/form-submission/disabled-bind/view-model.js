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

          this.firstName = "John";
          this.validation = validation.on(this).ensure("firstName").notEmpty().betweenLength(5, 10);
        }

        _createClass(Person, {
          welcome: {
            value: function welcome() {
              alert("Welcome " + this.firstName);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzL2Zvcm0tc3VibWlzc2lvbi9kaXNhYmxlZC1iaW5kL3ZpZXctbW9kZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUFRLFVBQVUsaUNBQ0wsTUFBTTs7OztBQURYLGdCQUFVLHNCQUFWLFVBQVU7Ozs7Ozs7OztBQUNMLFlBQU07QUFFTixpQkFGQSxNQUFNLENBRUwsVUFBVSxFQUFFO2dDQUZiLE1BQU07O0FBR2YsY0FBSSxDQUFDLFNBQVMsR0FBRyxNQUFNLENBQUM7QUFDeEIsY0FBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUNsQyxNQUFNLENBQUMsV0FBVyxDQUFDLENBQ2pCLFFBQVEsRUFBRSxDQUNWLGFBQWEsQ0FBQyxDQUFDLEVBQUMsRUFBRSxDQUFDLENBQUM7U0FDMUI7O3FCQVJVLE1BQU07QUFTakIsaUJBQU87bUJBQUEsbUJBQUU7QUFDTCxtQkFBSyxjQUFZLElBQUksQ0FBQyxTQUFTLENBQUcsQ0FBQzthQUN0Qzs7O0FBVk0sZ0JBQU07bUJBQUEsa0JBQUc7QUFBRSxxQkFBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQUM7Ozs7ZUFENUIsTUFBTSIsImZpbGUiOiJleGFtcGxlcy9mb3JtLXN1Ym1pc3Npb24vZGlzYWJsZWQtYmluZC92aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=