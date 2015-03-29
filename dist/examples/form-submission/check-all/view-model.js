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
              if (this.validation.checkAll()) alert("Welcome " + firstName);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzL2Zvcm0tc3VibWlzc2lvbi9jaGVjay1hbGwvdmlldy1tb2RlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO01BQVEsVUFBVSxpQ0FDTCxNQUFNOzs7O0FBRFgsZ0JBQVUsc0JBQVYsVUFBVTs7Ozs7Ozs7O0FBQ0wsWUFBTTtBQUVOLGlCQUZBLE1BQU0sQ0FFTCxVQUFVLEVBQUU7Z0NBRmIsTUFBTTs7QUFHZixjQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztBQUN4QixjQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQ2xDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FDakIsUUFBUSxFQUFFLENBQ1YsYUFBYSxDQUFDLENBQUMsRUFBQyxFQUFFLENBQUMsQ0FBQztTQUMxQjs7cUJBUlUsTUFBTTtBQVNqQixpQkFBTzttQkFBQSxtQkFBRTtBQUNQLGtCQUFHLElBQUksQ0FBQyxVQUFVLENBQUMsUUFBUSxFQUFFLEVBQzNCLEtBQUssY0FBWSxTQUFTLENBQUcsQ0FBQzthQUNqQzs7O0FBWE0sZ0JBQU07bUJBQUEsa0JBQUc7QUFBRSxxQkFBTyxDQUFDLFVBQVUsQ0FBQyxDQUFDO2FBQUM7Ozs7ZUFENUIsTUFBTSIsImZpbGUiOiJleGFtcGxlcy9mb3JtLXN1Ym1pc3Npb24vY2hlY2stYWxsL3ZpZXctbW9kZWwuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==