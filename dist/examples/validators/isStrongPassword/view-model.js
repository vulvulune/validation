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

          this.strongPasswordProperty = "Abc*12345";
          this.mediumPasswordProperty = "abc*12345";
          this.weakPasswordProperty = "abcde12345";

          this.validation = validation.on(this).ensure("strongPasswordProperty").isStrongPassword() //default 4
          .ensure("mediumPasswordProperty").isStrongPassword(3).ensure("weakPasswordProperty").isStrongPassword(2);
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzL3ZhbGlkYXRvcnMvaXNTdHJvbmdQYXNzd29yZC92aWV3LW1vZGVsLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7TUFBUSxVQUFVLGlDQUNMLE1BQU07Ozs7QUFEWCxnQkFBVSxzQkFBVixVQUFVOzs7Ozs7Ozs7QUFDTCxZQUFNO0FBRU4saUJBRkEsTUFBTSxDQUVMLFVBQVUsRUFBRTtnQ0FGYixNQUFNOztBQUdmLGNBQUksQ0FBQyxzQkFBc0IsR0FBRyxXQUFXLENBQUM7QUFDMUMsY0FBSSxDQUFDLHNCQUFzQixHQUFHLFdBQVcsQ0FBQztBQUMxQyxjQUFJLENBQUMsb0JBQW9CLEdBQUcsWUFBWSxDQUFDOztBQUV6QyxjQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQ2xDLE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLGdCQUFnQixFQUFFO1dBQ25ELE1BQU0sQ0FBQyx3QkFBd0IsQ0FBQyxDQUFDLGdCQUFnQixDQUFDLENBQUMsQ0FBQyxDQUNwRCxNQUFNLENBQUMsc0JBQXNCLENBQUMsQ0FBQyxnQkFBZ0IsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUN2RDs7cUJBWFUsTUFBTTtBQUNWLGdCQUFNO21CQUFBLGtCQUFHO0FBQUUscUJBQU8sQ0FBQyxVQUFVLENBQUMsQ0FBQzthQUFDOzs7O2VBRDVCLE1BQU0iLCJmaWxlIjoiZXhhbXBsZXMvdmFsaWRhdG9ycy9pc1N0cm9uZ1Bhc3N3b3JkL3ZpZXctbW9kZWwuanMiLCJzb3VyY2VSb290IjoiL3NyYy8ifQ==