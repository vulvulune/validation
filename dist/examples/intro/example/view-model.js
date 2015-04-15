System.register(['aurelia-validation'], function (_export) {
  var Validation, _classCallCheck, _createClass, Person;

  return {
    setters: [function (_aureliaValidation) {
      Validation = _aureliaValidation.Validation;
    }],
    execute: function () {
      'use strict';

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } };

      _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

      Person = (function () {
        function Person(validation) {
          _classCallCheck(this, Person);

          this.firstName = 'John';
          this.validation = validation.on(this).ensure('firstName').isNotEmpty().hasLengthBetween(3, 10);
        }

        _createClass(Person, null, [{
          key: 'inject',
          value: function inject() {
            return [Validation];
          }
        }]);

        return Person;
      })();

      _export('Person', Person);
    }
  };
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV4YW1wbGVzL2ludHJvL2V4YW1wbGUvdmlldy1tb2RlbC5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO2lEQUNhLE1BQU07Ozs7c0NBRFgsVUFBVTs7Ozs7Ozs7O0FBQ0wsWUFBTTtBQUVOLGlCQUZBLE1BQU0sQ0FFTCxVQUFVLEVBQUU7Z0NBRmIsTUFBTTs7QUFHZixjQUFJLENBQUMsU0FBUyxHQUFHLE1BQU0sQ0FBQztBQUN4QixjQUFJLENBQUMsVUFBVSxHQUFHLFVBQVUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLENBQ2xDLE1BQU0sQ0FBQyxXQUFXLENBQUMsQ0FDakIsVUFBVSxFQUFFLENBQ1osZ0JBQWdCLENBQUMsQ0FBQyxFQUFDLEVBQUUsQ0FBQyxDQUFDO1NBQzdCOztxQkFSVSxNQUFNOztpQkFDSixrQkFBRztBQUFFLG1CQUFPLENBQUMsVUFBVSxDQUFDLENBQUM7V0FBQzs7O2VBRDVCLE1BQU07Ozt3QkFBTixNQUFNIiwiZmlsZSI6ImV4YW1wbGVzL2ludHJvL2V4YW1wbGUvdmlldy1tb2RlbC5qcyIsInNvdXJjZVJvb3QiOiIvc3JjLyJ9