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

          this.numericProperty = -5, 0.123;

          this.validation = validation.on(this).ensure("numericProperty").isNumeric();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzL3ZhbGlkYXRvcnMvaXNOdW1lcmljL3ZpZXctbW9kZWwuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtNQUFRLFVBQVUsaUNBQ0wsTUFBTTs7OztBQURYLGdCQUFVLHNCQUFWLFVBQVU7Ozs7Ozs7OztBQUNMLFlBQU07QUFFTixpQkFGQSxNQUFNLENBRUwsVUFBVSxFQUFFO2dDQUZiLE1BQU07O0FBR2YsY0FBSSxDQUFDLGVBQWUsR0FBRyxDQUFDLENBQUMsRUFBQyxLQUFPLENBQUM7O0FBRWxDLGNBQUksQ0FBQyxVQUFVLEdBQUcsVUFBVSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsQ0FDaEMsTUFBTSxDQUFDLGlCQUFpQixDQUFDLENBQUMsU0FBUyxFQUFFLENBQUM7U0FDNUM7O3FCQVBVLE1BQU07QUFDVixnQkFBTTttQkFBQSxrQkFBRztBQUFFLHFCQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7YUFBQzs7OztlQUQ1QixNQUFNIiwiZmlsZSI6ImV4YW1wbGVzL3ZhbGlkYXRvcnMvaXNOdW1lcmljL3ZpZXctbW9kZWwuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==