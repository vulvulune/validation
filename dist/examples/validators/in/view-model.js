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

          this.inProperty = "Gold";

          this.validation = validation.on(this).ensure("inProperty")["in"](["Gold", "Silver", "Platinum"]);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzL3ZhbGlkYXRvcnMvaW4vdmlldy1tb2RlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQVEsVUFBVSxpQ0FDTCxNQUFNOzs7O0FBRFgsZ0JBQVUsc0JBQVYsVUFBVTs7Ozs7Ozs7O0FBQ0wsWUFBTTtBQUVOLGlCQUZBLE1BQU0sQ0FFTCxVQUFVLEVBQUU7Z0NBRmIsTUFBTTs7QUFHZixjQUFJLENBQUMsVUFBVSxHQUFHLE1BQU0sQ0FBQzs7QUFFekIsY0FBSSxDQUFDLFVBQVUsR0FBRyxVQUFVLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxDQUNsQyxNQUFNLENBQUMsWUFBWSxDQUFDLE1BQUcsQ0FBQyxDQUFDLE1BQU0sRUFBQyxRQUFRLEVBQUUsVUFBVSxDQUFDLENBQUMsQ0FBQztTQUMzRDs7cUJBUFUsTUFBTTtBQUNWLGdCQUFNO21CQUFBLGtCQUFHO0FBQUUscUJBQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUFDOzs7O2VBRDVCLE1BQU0iLCJmaWxlIjoiZXhhbXBsZXMvdmFsaWRhdG9ycy9pbi92aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6Ii9zcmMvIn0=