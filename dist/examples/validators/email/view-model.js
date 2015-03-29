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

          this.emailProperty = "john@doe.com";

          this.validation = validation.on(this).ensure("emailProperty").email();
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzL3ZhbGlkYXRvcnMvZW1haWwvdmlldy1tb2RlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQVEsVUFBVSxpQ0FDTCxNQUFNOzs7O0FBRFgsZ0JBQVUsc0JBQVYsVUFBVTs7Ozs7Ozs7O0FBQ0wsWUFBTTtBQUVOLGlCQUZBLE1BQU0sQ0FFTCxVQUFVLEVBQUU7Z0NBRmIsTUFBTTs7QUFHZixjQUFJLENBQUMsYUFBYSxHQUFHLGNBQWMsQ0FBQzs7QUFFcEMsY0FBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUNsQyxNQUFNLENBQUMsZUFBZSxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUM7U0FDcEM7O3FCQVBVLE1BQU07QUFDVixnQkFBTTttQkFBQSxrQkFBRztBQUFFLHFCQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7YUFBQzs7OztlQUQ1QixNQUFNIiwiZmlsZSI6ImV4YW1wbGVzL3ZhbGlkYXRvcnMvZW1haWwvdmlldy1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9